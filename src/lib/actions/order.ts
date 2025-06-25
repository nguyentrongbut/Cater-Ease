'use server'

import axios from "axios";
import {BookingPayload} from "@/components/pages/cart/form.booking";
import {TOrder} from "@/types";
// import cachedAxiosGet from "@/utils/cached.axios.get";

const url = `${process.env.API_URL_P}/order`;

export async function getListOrderUser(authId: string) {
    try {
        const response = await axios.get(`${url}/auth/${authId}`);

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

export async function postOrder(dataOrder: BookingPayload) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { addressRestaurant, addressHome, locationType, ...rest } = dataOrder;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const data: TOrder = {
            ...rest,
            address: addressHome ?? addressRestaurant ?? "",
            note: "",
        };

        const response = await axios.post(`${url}`, data);
        return response.data.id;
    } catch (error) {
        console.error("Post order failed:", error);
        return null;
    }
}