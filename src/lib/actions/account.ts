'use server';

import axios from "axios";
import {cookies} from "next/headers";
import {TUserInfo} from "@/types";
import cachedAxiosGet from "@/utils/cached.axios.get";
import {revalidateTag} from "next/cache";
import {ProfileFormUpdate} from "@/components/pages/profile/form.update.profile";

const url = `${process.env.API_URL_P}/auth`;

export async function getProfile() {
    try {
        const cookieStore = await cookies();
        const userInfoRaw = cookieStore.get('userInfo')?.value;

        if (!userInfoRaw) return null;

        const userInfo = JSON.parse(userInfoRaw);
        const id = userInfo?.id;

        if (!id) return null;

        const data: TUserInfo= await cachedAxiosGet(
            `${url}/${id}`,
            ['profile']
        );

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {role, ...rest} = data;

        return rest;
    } catch (error) {
        console.error("Error in get profile:", error);
        return null;
    }
}

export async function updateProfile(infoProfile: ProfileFormUpdate) {
    const { id, name, email, avatar, phone, address } = infoProfile;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);

    if (avatar instanceof File) {
        formData.append("avatar", avatar);
    }

    try {
        const response = await axios.patch(`${url}/${id}`, formData);
        if (!response.data) return null;

        revalidateTag('profile');
        return 200;
    } catch (error) {
        console.error("Error in update profile:", error);
        return null;
    }
}

export async function changePassword(id: string, newPassword: string) {
    try {
        const response = await axios.patch(`${url}/${id}`, {
                password: newPassword,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        if (response.data.length < 1) return null;

        revalidateTag('profile');

        return 200;
    } catch (error) {
        console.error("Error in change password:", error);
        return null;
    }
}