'use server';

import axios from "axios";
import {cookies} from "next/headers";
import {TUserInfo} from "@/types";
import cachedAxiosGet from "@/utils/cached.axios.get";
import {revalidateTag} from "next/cache";
import {ProfileFormUpdate} from "@/components/pages/profile/form.update.profile";

const url = `${process.env.API_URL}/auth`;

export async function getProfile() {
    try {
        const cookieStore = await cookies();
        const userInfoRaw = cookieStore.get('userInfo')?.value;

        if (!userInfoRaw) return null;

        const userInfo = JSON.parse(userInfoRaw);
        const id = userInfo?.id;

        if (!id) return null;

        const data:TUserInfo[] = await cachedAxiosGet(
            `${url}?id=${id}`,
            ['profile']
        );

        if (data.length < 1) return null;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {role, ...rest} = data[0];

        return rest;
    } catch (error) {
        console.error("Error in get profile:", error);
        return null;
    }
}

export async function updateProfile(infoProfile: ProfileFormUpdate) {
    const {id, avatar, ...rest} = infoProfile;
    const avatarValue = typeof avatar === "string" ? avatar : "";
    try {
        const response = await axios.patch(`${url}/${id}`, {
                ...rest,
                avatar: avatarValue,
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
        console.error("Error in update profile:", error);
        return null;
    }
}