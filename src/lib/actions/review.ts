'use server';

import axios from "axios";
import cachedAxiosGet from "@/utils/cached.axios.get";
import {TReview} from "@/types";
import {revalidateTag} from "next/cache";
import {PostReviewForm} from "@/components/pages/event-dishes/detail/post.review";


const url = `${process.env.API_URL}/reviews`;

export async function getListReview(foodId : string) {
    try {
        const data:TReview[] = await cachedAxiosGet(`${url}?foodId=${foodId}&_sort=createdAt&_order=desc`, ['review']);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function postReview(dataReview: PostReviewForm) {
    try {
        const response = await axios.post(`${url}`, dataReview);

        if (response.data.length < 1) return null;

        revalidateTag('review')

        return 201
    } catch (error) {
        console.log(error)
        return null;
    }
}