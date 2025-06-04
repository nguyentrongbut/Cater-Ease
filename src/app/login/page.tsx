'use client'
import React from "react";
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginCustomer from "@/app/login/login.customer";
import LoginCaterer from "@/app/login/login.caterer";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Logo from "@/components/common/logo";

const formSchema = z.object({
    email: z.string().email({ message: 'Email không hợp lệ' }),
    password: z.string().min(1, 'Mật khẩu không được để trống'),
});

export type LoginForm = z.infer<typeof formSchema>;

export default function LoginPage() {

    // 1. Define your form.
    const form = useForm<LoginForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: LoginForm, userType: "customer" | "caterer") {
        console.log({...values, userType});
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="flex justify-center flex-col items-center mb-8">
                    <Logo size="xl"></Logo>
                    <p className="text-gray-600 mt-2">Welcome back! Please sign in to your account.</p>
                </div>

                <Tabs defaultValue="customer" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="customer">Customer</TabsTrigger>
                        <TabsTrigger value="caterer">Caterer</TabsTrigger>
                    </TabsList>

                    <TabsContent value="customer">
                        <Card>
                            <CardHeader>
                                <CardTitle>Customer Login</CardTitle>
                                <CardDescription>Sign in to book amazing catering services</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <LoginCustomer
                                    form={form}
                                    onSubmit={onSubmit}
                                ></LoginCustomer>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="caterer">
                        <Card>
                            <CardHeader>
                                <CardTitle>Caterer Login</CardTitle>
                                <CardDescription>Access your catering business dashboard</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <LoginCaterer
                                    form={form}
                                    onSubmit={onSubmit}
                                ></LoginCaterer>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don&apos;t have an account?
                        <Link href="/sign-up" className="text-primary hover:underline font-medium ml-2">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
