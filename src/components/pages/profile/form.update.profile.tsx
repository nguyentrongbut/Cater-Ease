'use client';

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {DialogClose} from "@/components/ui/dialog";
import TabUploadImg from "@/components/pages/profile/tab.upload.img";
import {TUserInfo} from "@/types";

const formSchema = z.object({
    avatar: z
        .union([
            z.string().url("Avatar must be a valid URL or an uploaded image file."),
            z.instanceof(File)
        ])
        .optional(),
    name: z.string().min(4, 'Name must be at least 4 characters long'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    address: z.string().min(1, 'Address cannot be empty'),
});

export type ProfileForm = z.infer<typeof formSchema>;


const FormUpdateProfile = ({infoProfile}: { infoProfile: TUserInfo }) => {
    // 1. Define your form.
    const form = useForm<ProfileForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            avatar: infoProfile.avatar ?? '',
            name: infoProfile.name ?? '',
            email: infoProfile.email ?? '',
            phone: infoProfile.phone ?? '',
            address: infoProfile.address ?? '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: ProfileForm) {
        try {
            console.log('Form submitted with values:', values);
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4">
                <FormField
                    control={form.control}
                    name="avatar"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Avatar</FormLabel>
                            <FormControl>
                                <TabUploadImg {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
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
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Enter your phone" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter your address" {...field} />
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
                        Update Profile
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default FormUpdateProfile;