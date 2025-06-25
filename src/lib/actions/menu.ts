'use server';

import axios from "axios";
import cachedAxiosGet from "@/utils/cached.axios.get";
import {TMenu} from "@/types";

const url = `${process.env.API_URL_P}/menu`;

export async function getFeaturedEventMenus() {
    try {
        const response = await axios.get(`${url}/top-rated`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getListEventMenus(keyword: string) {
    try {
        const data = await cachedAxiosGet(`${url}?eventName=${keyword}`, ['menus']);
        return data.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getEventMenu(slug: string) {
    try {
        const data:TMenu = await cachedAxiosGet(`${url}/${slug}`, ['menus']);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}