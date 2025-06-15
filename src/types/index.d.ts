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

export type TListEventMenu = {
    id: string,
    name: string,
    description: string,
    slug: string,
    cuisine: string,
    rating: number,
    reviews: number,
    location: string,
    minOrder: number,
    image: string,
    images: string[],
    specialties: string[],
    priceRange: number,
}

export type TEvent = {
    id: string,
    name: string,
}

export type TCuisine = TEvent


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
    foodId: string,
    name: string,
    rating: number,
    createdAt: number,
    comment: string,
}