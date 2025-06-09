"use client"

import React from "react"
import Link from "next/link"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {User} from "lucide-react"
import Logo from "@/components/common/logo";
import SignUpCustomer from "@/app/sign-up/sign.up.customer";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {signUp} from "@/lib/actions/auth";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(4, 'Name must be at least 4 characters long'),
    email: z.string().email('Invalid email address'),
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

    const router = useRouter();

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
    async function onSubmit(values: SignUpForm) {
        console.log({...values});
        try {
            const result = await signUp(values);
            if (!result) return toast.error('Registration failed. Please check your details!');
            if (result === 201) {
                toast.success('Registration successful! Please log in.');
                router.push('/login');
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    return (
        <div
            className="min-h-screen bg-rose-50 dark:bg-background  flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                {/* Logo */}
                <div className=" text-center mb-8">
                   <div className="flex justify-center">
                       <Logo size="lg"></Logo>
                   </div>
                    <p className="text-gray-600 mt-2 dark:text-gray-300">Join our community and start your catering
                        journey!</p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5"/>
                            Sign Up
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

            <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-300">
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
