'use server';

import axios from "axios";

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