'use client';

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {InputPassword} from "@/components/input";
import {Button} from "@/components/ui/button";
import type React from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {DialogClose} from "@/components/ui/dialog";
import {TUserInfo} from "@/types";
import toast from "react-hot-toast";
import {changePassword} from "@/lib/actions/account";

const formSchema = z.object({
    password: z.string()
        .min(12, 'Password must be at least 12 characters long')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    newPassword: z.string()
        .min(12, 'Password must be at least 12 characters long')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirmNewPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
});

export type FormChangePassword = z.infer<typeof formSchema>;

const FormChangePassword = ({infoProfile, onClose}: { infoProfile: TUserInfo, onClose?: () => void }) => {
    // 1. Define your form.
    const form = useForm<FormChangePassword>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: '',
            newPassword: '',
            confirmNewPassword: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: FormChangePassword) {
        const id = infoProfile.id;
        const passwordProfile = infoProfile?.password || '';
        const {password, newPassword} = values;

        const isValid = password === passwordProfile;

        if (!isValid) return toast.error("Old password is incorrect. Please try again.");

        try {
            const result = await changePassword(id, newPassword);
            if (!result) return toast.error('Change password failed. Please try again.');
            if (result === 200) {
                toast.success('Change password successfully.');
                onClose?.();
            }
        } catch (error) {
            console.error("Error when change password:", error);
        }
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit((onSubmit))}
                className="space-y-4">
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Old Password</FormLabel>
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
                    name="newPassword"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
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
                    name="confirmNewPassword"
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
                <div className="flex justify-end gap-4 !mt-8">
                    <DialogClose asChild>
                        <Button type="button" variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">
                        Change Password
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default FormChangePassword;