'use server';

import axios from "axios";
import cachedAxiosGet from "@/utils/cached.axios.get";
import {TListEventMenu} from "@/types";

const url = `${process.env.API_URL}/event-dishes`;

export async function getFeaturedEventMenus() {
    try {
        const response = await axios.get(`${url}?_sort=rating&_order=desc&_limit=3`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getListEventMenus(keyword: string) {
    try {
        const data:TListEventMenu[] = await cachedAxiosGet(`${url}?name_like=${keyword}`, ['event-dishes']);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getEventMenu(slug: string) {
    try {
        const data:TListEventMenu[] = await cachedAxiosGet(`${url}?slug=${slug}`, ['event-dishes']);
        return data[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}