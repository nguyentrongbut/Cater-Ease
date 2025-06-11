'use server';

import axios from "axios";
import cachedAxiosGet from "@/utils/cached.axios.get";
import {TListEventMenu} from "@/types";

const url = `${process.env.API_URL}/event-menus`;

export async function getFeaturedEventMenus() {
    try {
        const response = await axios.get(`${url}?_sort=rating&_order=desc&_limit=3`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getListEventMenus() {
    try {
        const data:TListEventMenu[] = await cachedAxiosGet(`${url}`, ['event-menus']);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}