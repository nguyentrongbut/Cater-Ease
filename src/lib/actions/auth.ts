'use server';

import axios from "axios";
import {LoginForm} from "@/app/login/page";
import {SignUpForm} from "@/app/sign-up/page";
import { cookies } from 'next/headers';

const url = `${process.env.API_URL}/auth`;

export async function login(values: LoginForm) {
    const cookieStore = await cookies();
    try {
        const response = await axios.get(`${url}?email=${values.email}&password=${values.password}`);
        const data = response.data;

        if (data.length < 1) return null;

        const {id, role, address, email, name, phone} = data[0];

        cookieStore.set({
            name: 'userInfo',
            value: JSON.stringify({id, role}),
            httpOnly: true,
            path: '/',
        });

        return {id, name, email, phone, address};
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function signUp(values: SignUpForm) {
    const {name, email, phone, password, address} = values;
    const role = 'customer';
    try {
        const response = await axios.post(`${url}`, {
            name,
            email,
            phone,
            password,
            address,
            role
        })

        if (response.data.length < 1) return null;
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
