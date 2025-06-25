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
    id: string,
    name: string,
    slug: string,
    description: string,
    dishes: TDish[],
    averageRating: number,
    image: string,
    event: string,
    price: number,
    totalReviews: number,
}

export type TDish = {
    id: string,
    name: string,
    description: string,
    categoryName: string,
    price: number,
    image: string,
}

export type TEvent = {
    id: string,
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
    id: string,
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
    categoryName: string
}

export type TCartItemQ = TCartItem & {
    quantity: number;
}

export type TOrder = {
    authId: string,
    name: string,
    phone: string,
    email: string,
    note: string,
    address: string,
    eventDate: Date | string,
    tableNumber: number,
    items?: TCartItem[],
}

export type TInfoImage = {
    name: string,
    image: string,
}

export type Params = Promise<{ slug: string }>