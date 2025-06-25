'use client'

import useCart from "@/hooks/useCart";
import {TDish} from "@/types";
import toast from "react-hot-toast";
import React from "react";

const AddToCart = ({eventMenu, children}: {
    eventMenu: TDish | TDish[] | null;
    children: React.ReactNode;
}) => {
    const {addItem, addItems} = useCart();

    const handleAddToCart = () => {
        if (!eventMenu) return;

        if (Array.isArray(eventMenu)) {
            addItems(
                eventMenu.map(({id, name, image, price, categoryName}) => ({
                    id,
                    name,
                    image,
                    price,
                    categoryName
                }))
            );
            toast.success("Added menu to cart");
        } else {
            const {id, name, price, image, categoryName} = eventMenu;
            addItem({id, name, image, price, categoryName});
            toast.success("Added to cart");
        }
    };

    return <div onClick={handleAddToCart}>{children}</div>;
};

export default AddToCart;
