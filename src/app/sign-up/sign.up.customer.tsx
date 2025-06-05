import {Input} from "@/components/ui/input";
import {Mail, MapPin, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import type React from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {InputIcon, InputPassword} from "@/components/input";
import {UseFormReturn} from "react-hook-form";
import {SignUpForm} from "@/app/sign-up/page";

export type SignUpProps = {
    onSubmit: (values: SignUpForm) => void;
    form: UseFormReturn<SignUpForm>;
};

const SignUpCustomer = ({
                            onSubmit,
                            form,
                        }: SignUpProps) => {
    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit((values) => onSubmit(values))}
                className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <InputIcon
                                    icon={<Mail className="size-4"/>}
                                    placeholder="Enter your email"
                                    {...field}
                                ></InputIcon>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <InputIcon
                                    type="tel"
                                    icon={<Phone className="size-4"/>}
                                    placeholder="Enter your phone number"
                                    {...field}
                                ></InputIcon>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <InputPassword
                                        placeholder="Enter your password"
                                        {...field}
                                    ></InputPassword>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <InputPassword
                                        placeholder="Confirm your password"
                                        {...field}
                                    ></InputPassword>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="address"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <InputIcon
                                    icon={<MapPin className="size-4"/>}
                                    placeholder="Enter your address"
                                    {...field}
                                ></InputIcon>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({field}) => (
                        <FormItem>
                            <div className="flex items-center gap-2">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel className="text-sm">
                                    I agree to the
                                    <Link href="/terms" className="text-primary hover:underline mx-1">
                                        Terms and Conditions
                                    </Link>
                                    and
                                    <Link href="/privacy" className="text-primary hover:underline mx-1">
                                        Privacy Policy
                                    </Link>
                                </FormLabel>
                            </div>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" size="lg">
                    Create Customer Account
                </Button>
            </form>
        </Form>
    )
}

export default SignUpCustomer