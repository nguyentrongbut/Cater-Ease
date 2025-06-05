'use client'
import React from "react";
import Link from "next/link"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import LoginCustomer from "@/app/login/login.customer";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Logo from "@/components/common/logo";
import {login} from "@/app/action";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";


const formSchema = z.object({
    email: z.string().email({message: 'Email không hợp lệ'}),
    password: z.string().min(1, 'Mật khẩu không được để trống'),
});

export type LoginForm = z.infer<typeof formSchema>;

export default function LoginPage() {

    const router = useRouter();

    // 1. Define your form.
    const form = useForm<LoginForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: LoginForm) {
        try {
            const result = await login(values);
            if (!result) return toast.error('Login failed. Please check your credentials!');
            const role = result[0]?.role || '';
            if (result) {
                localStorage.setItem(
                    'userInfo',
                    JSON.stringify(result)
                );
                // Trigger event
                window.dispatchEvent(new Event('userInfoChanged'));
            }

            toast.success('Login successful!');
            if (role !== 'caterer') return router.push('/')
            return router.push('/dashboard/caterer');
        } catch (error) {
            console.error('Login error:', error);
        }
    }


    return (
        <div
            className="min-h-screen bg-rose-50 dark:bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex justify-center">
                        <Logo size="xl"></Logo>
                    </div>
                    <p className="text-gray-600 mt-2 dark:text-white">Welcome back! Please sign in to your account.</p>
                </div>
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
                <div className="mt-6 text-center">
                    <p className="text-gray-600 dark:text-white">
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
