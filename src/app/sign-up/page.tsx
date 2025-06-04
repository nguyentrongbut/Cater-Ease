"use client"

import type React from "react"
import Link from "next/link"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {User, Building} from "lucide-react"
import Logo from "@/components/common/logo";
import SignUpCustomer from "@/app/sign-up/sign.up.customer";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import SignUpCaterer from "@/app/sign-up/sign.up.caterer";

const formSchema = z.object({
    name: z.string().min(4, 'Name must be at least 4 characters long'),
    email: z.string().email({message: 'Invalid email address'}),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    password: z.string()
        .min(12, 'Password must be at least 12 characters long')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    address: z.string().min(1, 'Address cannot be empty'),
    acceptTerms: z.boolean().refine(val => val === true, {message: "You must agree to the terms"}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type SignUpForm = z.infer<typeof formSchema>;

export default function RegisterPage() {

    // 1. Define your form.
    const form = useForm<SignUpForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            address: '',
            acceptTerms: false,
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: SignUpForm, userType: "customer" | "caterer") {
        console.log({...values, userType});
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                {/* Logo */}
                <div className="flex flex-col justify-center items-center mb-8">
                    <Logo size="xl"></Logo>
                    <p className="text-gray-600 mt-2">Join our community and start your catering journey!</p>
                </div>

                <Tabs defaultValue="customer" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="customer">Sign Up as Customer</TabsTrigger>
                        <TabsTrigger value="caterer">Sign Up as Caterer</TabsTrigger>
                    </TabsList>

                    <TabsContent value="customer">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="h-5 w-5"/>
                                    Customer Registration
                                </CardTitle>
                                <CardDescription>Create your account to start booking amazing catering
                                    services</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SignUpCustomer
                                    form={form}
                                    onSubmit={onSubmit}
                                ></SignUpCustomer>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="caterer">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Building className="h-5 w-5"/>
                                    Caterer Registration
                                </CardTitle>
                                <CardDescription>Join our platform and start growing your catering
                                    business</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SignUpCaterer
                                    form={form}
                                    onSubmit={onSubmit}
                                ></SignUpCaterer>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?
                        <Link href="/login" className="text-primary hover:underline font-medium ml-2">
                            Sign in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
