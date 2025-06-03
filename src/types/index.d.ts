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