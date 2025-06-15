'use server';

// import axios from "axios";
import cachedAxiosGet from "@/utils/cached.axios.get";


const url = `${process.env.API_URL}/reviews`;

export async function getListReview(foodId : string) {
    try {
        const data = await cachedAxiosGet(`${url}?foodId=${foodId}`, ['review']);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
