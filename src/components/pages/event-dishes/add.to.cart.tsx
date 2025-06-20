'use client'

import useCart from "@/hooks/useCart";
import {TListEventMenu} from "@/types";
import toast from "react-hot-toast";
import React from "react";

const AddToCart = ({eventMenu, children}: { eventMenu: TListEventMenu | null, children:React.ReactNode }) => {
    const {addItem} = useCart()
    if (!eventMenu) return null;
    const {id, name, priceRange, image} = eventMenu

    const handleAddToCart = () => {
        addItem({
            id,
            name,
            image,
            price: priceRange,
        })
        toast.success("Added to cart")
    }

    return (
        <div onClick={handleAddToCart}>
            {children}
        </div>
    )
}

export default AddToCart