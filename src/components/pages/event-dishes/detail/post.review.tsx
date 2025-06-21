'use client'

import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Send, Star} from "lucide-react";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import toast from "react-hot-toast";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {TUserInfo} from "@/types";
import {useRouter} from "next/navigation";
import {postReview} from "@/lib/actions/review";

const formSchema = z.object({
    rating: z.number().min(1, "Please give a rating"),
    comment: z.string(),
});

export type ReviewForm = z.infer<typeof formSchema>;

export type PostReviewForm = ReviewForm & {
    foodId: string,
    name: string,
    createdAt: number,
}

const PostReview = ({infoProfile, id} : {infoProfile :TUserInfo | null, id : string}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    // 1. Define your form.
    const form = useForm<ReviewForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            rating: 0,
            comment: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: ReviewForm) {
        setIsSubmitting(true);
        try {
            if (!infoProfile) {
                router.push("/login");

                return toast('Please log in to review dish.', {
                    icon: '🔒',
                    duration: 2000,
                    className: 'bg-white text-black border border-gray-200 text-sm',
                });
            }
            const formData = {
                ...values,
                foodId: id,
                name: infoProfile?.name,
                createdAt: Date.now(),
            };

            const result = await postReview(formData);
            if (!result) return toast.error('Send Review failed!');
            if (result === 201) {
                toast.success('Send Review successful!');
            }

        } catch (error) {
            console.error('Send Review error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <FormField
                    control={form.control}
                    name="rating"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Rating</FormLabel>
                            <FormControl>
                                <div className="flex gap-1 mt-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => field.onChange(star)}
                                            className="p-1"
                                        >
                                            <Star
                                                className={`h-6 w-6 ${
                                                    star
                                                        <= field.value
                                                        ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="comment"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Your Review</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell others about your experience..."
                                    rows={4}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <div className="flex justify-end pt-1">
                    <Button type="submit"
                        isLoading={isSubmitting} disabled={isSubmitting}
                    >
                        <Send/>
                        Send
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default PostReview