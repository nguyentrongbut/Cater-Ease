'use client'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from '@hookform/resolvers/zod';
import HeadingFooter from "@/components/layout/customer/footer/heading.footer";

const formSchema = z.object({
    email: z.string().email({message: 'Email không hợp lệ!'}),
})

export type NewLetterForm = z.infer<typeof formSchema>;

const NewLetter = () => {
    // 1. Define your form.
    const form = useForm<NewLetterForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: NewLetterForm) {
        console.log(values)
    }

    return (
        <>
            <HeadingFooter>Newsletter</HeadingFooter>
            <Form {...form}>
                <form
                    className="space-y-3"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email ..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Subscribe
                    </Button>
                </form>
            </Form>
        </>
    )
}

export default NewLetter