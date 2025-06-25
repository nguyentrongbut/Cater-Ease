"use server"

import {TEvent} from "@/types";

import cachedAxiosGet from "@/utils/cached.axios.get";

const url = `${process.env.API_URL_P}/event`;

export async function getListEvent() {
    try {
        const data:TEvent[] = await cachedAxiosGet(`${url}`, ['events']);

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}