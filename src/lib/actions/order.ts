'use server'

import axios from "axios";
import {BookingPayload} from "@/components/pages/cart/form.booking";

const url = `${process.env.API_URL}/orders`;

export async function postOrder(dataOrder: BookingPayload ) {
    try {
        const response = await axios.post(`${url}`, dataOrder);

        if (response.data.length < 1) return null;

        return 201
    } catch (error) {
        console.log(error)
        return null;
    }
}