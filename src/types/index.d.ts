import React from "react";

export type TSocialItem = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
}


export type TQuickLink = {
    href: string;
    title: string;
}

export type TContactItem = TQuickLink & {
    icon: React.ReactElement;
    target?: string;
}

export type TUserInfo = {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar?: string;
    role?: string;
    password?: string;
    status?: string;
}

export type TMenu = {
    _id: string,
    name: string,
    description: string,
    slug: string,
    dishes: TDish[],
    averageRating: number,
    image: string,
    events: string[],
    price: number,
    totalReviews: number,
}

export type TDish = {
    _id: string,
    name: string,
    description: string,
    category: string,
    price: number,
    image: string,
}

export type TEvent = {
    _id: string,
    title: string,
}

export type TCategory = TEvent


export type TQuickStats = {
    number: string;
    title: string;
    plus?: boolean;
}

export type THowItWorkItem = {
    icon: React.ReactElement;
    title: string;
    desc: string;
}

export type TReview = {
    _id: string,
    userName: string,
    comment: string,
    rating: number,
    createdAt: string,
}

export type TCartItem = {
    id: string,
    name: string,
    price: number,
    image: string,
}