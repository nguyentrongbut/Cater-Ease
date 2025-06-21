'use server'

import axios from "axios";
import {BookingPayload} from "@/components/pages/cart/form.booking";
// import cachedAxiosGet from "@/utils/cached.axios.get";

const url = `${process.env.API_URL}/orders`;

export async function getListOrderUser(userId: string) {
    try {
        const response = await axios.get(`${url}?userId=${userId}`);

        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getOrderDetail(id: string) {
    try {
        const response = await axios.get(`${url}/${id}`);

        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function postOrder(dataOrder: BookingPayload ) {
    try {
        const response = await axios.post(`${url}`, dataOrder);

        if (!response.data || !response.data.id) {
            return null;
        }

        return response.data.id;
    } catch (error) {
        console.log(error)
        return null;
    }
}