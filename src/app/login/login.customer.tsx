import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {LoginForm} from "@/app/login/page";
import {UseFormReturn} from "react-hook-form";
import InputPassword from "@/components/input/input.password";

export type LoginProps = {
    onSubmit: (values: LoginForm) => void;
    form: UseFormReturn<LoginForm>;
    isSubmitting: boolean;
};

const LoginCustomer = ({
                           onSubmit,
                           form,
                            isSubmitting
                       }: LoginProps) => {
    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit((values) => onSubmit(values))}
                className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
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

                <div className="flex items-center justify-between">
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <Button type="submit" className="w-full" isLoading={isSubmitting} disabled={isSubmitting}>
                    Sign In
                </Button>
            </form>
        </Form>
    )
}

export default LoginCustomer