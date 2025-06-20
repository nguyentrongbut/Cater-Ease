'use client';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import {z} from 'zod';
import React, {useState} from 'react';
import {ControllerRenderProps, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import StepGuide from '@/components/common/step.guide';
import {Label} from '@/components/ui/label';
import {ArrowLeft, Trash, UtensilsCrossed} from 'lucide-react';
import {Input} from '@/components/ui/input';
import CalendarDate from '@/components/common/calendar.date';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import useInfoProfileClient from "@/hooks/useInfoProfileClient";
import {TCartItem} from "@/types";
import {postOrder} from "@/lib/actions/order";
import {useRouter} from "next/navigation";
import {getAnonymousUserId} from "@/utils/anonymous.user.id";

const formSchema = z.object({
    locationType: z.enum(['restaurant', 'home']),
    tableNumber: z
        .number({invalid_type_error: 'Table number is required'})
        .min(5, 'Minimum 5 tables required'),
    eventDate: z
        .date({required_error: 'Event date is required'})
        .refine((date) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const minDate = new Date(today);
            minDate.setDate(minDate.getDate() + 7);
            return date >= minDate;
        }, {
            message: 'Event date must be at least 7 days from today'
        }),
    addressRestaurant: z.string().optional(),
    addressHome: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.locationType === 'restaurant' && !data.addressRestaurant?.trim()) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Please select a restaurant address.',
            path: ['addressRestaurant'],
        });
    }
    if (data.locationType === 'home' && !data.addressHome?.trim()) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Please enter your home address.',
            path: ['addressHome'],
        });
    }
});

type BookingForm = z.infer<typeof formSchema>;

export type BookingPayload = Omit<BookingForm, 'eventDate'> & {
    eventDate: string;
    userName?: string;
    addressRestaurant?: string;
    addressHome?: string;
    total: number;
    subTotal: number;
    items: TCartItem[];
    status: string;
};


const FormBooking = (
    {tableNumber, setTableNumber, totalPrice, items}
    : {tableNumber:number, setTableNumber: (value: number) => void, totalPrice: number, items: TCartItem[]}) => {

    const router = useRouter();

    const {clearCart} = useCart()

    const {infoProfile} = useInfoProfileClient();

    let name = getAnonymousUserId();

    if (infoProfile) {
        name = infoProfile.name;
    }

    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<BookingForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tableNumber: tableNumber,
            eventDate: undefined,
            addressRestaurant: "",
            addressHome: "",
            locationType: "restaurant",
        },
    });

    const handleTableNumber = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: ControllerRenderProps<BookingForm, 'tableNumber'>
    ) => {
        const value = Number(e.target.value);
        field.onChange(value);
        setTableNumber(value);
    }

    async function onSubmit(values: BookingForm) {
        setIsSubmitting(true);
        try {
            const payload : BookingPayload = {
                tableNumber: values.tableNumber,
                eventDate: values.eventDate.toISOString(),
                locationType: values.locationType,
                total: totalPrice,
                subTotal: totalPrice * tableNumber,
                items: items,
                status: "pending"
            };

            if (values.locationType === 'restaurant') {
                payload.addressRestaurant = values.addressRestaurant;
            } else if (values.locationType === 'home') {
                payload.addressHome = values.addressHome;
            }

            if (name) {
                payload.userName = name;
            }

            const orderId = await postOrder(payload);

            if (!orderId) return toast.error('Send order failed!');
            if (orderId) {
                router.push(`/orders/${orderId}`);
                toast.success('Send order successful! Please wait for order confirmation.');
                clearCart()
            }
        } catch (error) {
            console.error('Error when submitting booking:', error);
            toast.error('Booking failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                    {/* Table Number */}
                    <FormField
                        control={form.control}
                        name="tableNumber"
                        render={({field}) => (
                            <FormItem>
                                <StepGuide step={2} text="Enter number of tables (min 5 tables for 50 guests)"/>
                                <FormControl>
                                    <div className="relative mt-2">
                                        <Label className="cursor-pointer">
                                            <UtensilsCrossed
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4"/>
                                        </Label>
                                        <Input
                                            type="number"
                                            className="pl-10"
                                            value={field.value}
                                            onChange={(e) => handleTableNumber(e, field)}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="eventDate"
                        render={({field}) => (
                            <FormItem>
                                <StepGuide step={3} text="Select date (min. 7 days from today)"/>
                                <FormControl>
                                    <CalendarDate value={field.value} onChange={field.onChange}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                <StepGuide step={4} text="Select event location"/>
                <FormField
                    control={form.control}
                    name="locationType"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Choose location</FormLabel>
                            <FormControl>
                                <Tabs
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    className="w-full"
                                >
                                    <TabsList className="mb-2">
                                        <TabsTrigger value="restaurant">At restaurant</TabsTrigger>
                                        <TabsTrigger value="home">At home</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="restaurant">
                                        <FormField
                                            control={form.control}
                                            name="addressRestaurant"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Select
                                                            value={field.value}
                                                            onValueChange={field.onChange}
                                                        >
                                                            <SelectTrigger className="w-full">
                                                                <SelectValue placeholder="Select address"/>
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="downtown">Downtown
                                                                    District</SelectItem>
                                                                <SelectItem value="westlake">Westlake View</SelectItem>
                                                                <SelectItem value="old-quarter">Old Quarter</SelectItem>
                                                                <SelectItem value="saigon-pearl">Saigon
                                                                    Pearl</SelectItem>
                                                                <SelectItem value="central-park">Central Park
                                                                    Mall</SelectItem>
                                                                <SelectItem value="thao-dien">Thao Dien
                                                                    Area</SelectItem>
                                                                <SelectItem value="ha-dong">Ha Dong Center</SelectItem>
                                                                <SelectItem value="vincom">Vincom Mega Mall</SelectItem>
                                                                <SelectItem value="landmark">Landmark 81
                                                                    Rooftop</SelectItem>
                                                                <SelectItem value="ecopark">EcoPark
                                                                    Riverside</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </TabsContent>

                                    <TabsContent value="home">
                                        <FormField
                                            control={form.control}
                                            name="addressHome"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Enter your address" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </TabsContent>
                                </Tabs>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Cart Actions */}
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <Link href="/event-dishes" className="flex-1">
                            <Button type="button" variant="outline" className="w-full">
                                <ArrowLeft />
                                Go back to shopping
                            </Button>
                        </Link>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={clearCart}
                            className="text-primary hover:text-primary/70"
                        >
                            <Trash />
                            Remove all dishes
                        </Button>
                    </div>

                    <Button type="submit" isLoading={isSubmitting}>Send Order</Button>
                </div>
            </form>
        </Form>
    );
};

export default FormBooking;
