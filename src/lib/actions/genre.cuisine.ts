"use server"

import cachedAxiosGet from "@/utils/cached.axios.get";
import {TCuisine} from "@/types";

const url = `${process.env.API_URL}/cuisines`;

export async function getListCuisine() {
    try {
        const data:TCuisine[] = await cachedAxiosGet(`${url}`, ['cuisines']);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}