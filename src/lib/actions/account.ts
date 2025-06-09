'use server';

import axios from "axios";
import { cookies } from "next/headers";

const url = `${process.env.API_URL}/auth`;

export async function getProfile() {
    try {
        const cookieStore = await cookies();
        const userInfoRaw = cookieStore.get('userInfo')?.value;

        if (!userInfoRaw) return null;

        const userInfo = JSON.parse(userInfoRaw);
        const id = userInfo?.id;

        if (!id) return null;

        const response = await axios.get(`${url}?id=${id}`);

        const data = response.data;

        if (data.length < 1) return null;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { role, ...rest } = data[0];

        return rest;
    } catch (error) {
        console.error("Error in get profile:", error);
        return null;
    }
}
