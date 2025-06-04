import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {InputIcon, InputPassword} from "@/components/input";
import {Mail, MapPin, Phone} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import type React from "react";
import {SignUpProps} from "@/app/sign-up/sign.up.customer";

const SignUpCaterer = ({
                           onSubmit,
                           form,
                       }: SignUpProps) => {
    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit((values) => onSubmit(values, "caterer"))}
                className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter your business name" {...field} />
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
                            <FormLabel>Business Email</FormLabel>
                            <FormControl>
                                <InputIcon
                                    icon={<Mail className="size-4"/>}
                                    placeholder="Enter your business email"
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
                            <FormLabel>Business Phone</FormLabel>
                            <FormControl>
                                <InputIcon
                                    type="tel"
                                    icon={<Phone className="size-4"/>}
                                    placeholder="Enter your business number"
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
                            <FormLabel>Business Address</FormLabel>
                            <FormControl>
                                <InputIcon
                                    icon={<MapPin className="size-4"/>}
                                    placeholder="Enter your business address"
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
                                    ,
                                    <Link href="/privacy" className="text-primary hover:underline mx-1">
                                        Privacy Policy
                                    </Link>
                                    , and
                                    <Link href="/caterer-agreement" className="text-primary hover:underline mx-1">
                                        Caterer Agreement
                                    </Link>
                                </FormLabel>
                            </div>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" size="lg">
                    Create Caterer Account
                </Button>
            </form>
        </Form>
    )
}

export default SignUpCaterer;