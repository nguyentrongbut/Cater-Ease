'use server';

import axios from "axios";
import {LoginForm} from "@/app/login/page";
import {SignUpForm} from "@/app/sign-up/page";
import { cookies } from 'next/headers';

const url = `${process.env.API_URL_P}/auth`;

export async function login(values: LoginForm) {
    const cookieStore = await cookies();
    const {email, password} = values;
    try {
        const response = await axios.post(`${url}/login`, {
            email,
            password,
        });

        const data = response.data;
        if (!data) return null;

        const token = data.token;
        const {id, role } = data.user;

        cookieStore.set({
            name: 'userInfo',
            value: JSON.stringify({id, role, token}),
            httpOnly: true,
            path: '/',
        });

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function signUp(values: SignUpForm) {
    const {name, email, phone, password, address} = values;
    try {
        const response = await axios.post(`${url}/register`, {
            name,
            email,
            phone,
            password,
            address
        })

        const data = response.data;

        if (!data) return null;

        return 201

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function logoutServer() {
    const cookieStore = await cookies();
    try {
        cookieStore.delete('userInfo');
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
