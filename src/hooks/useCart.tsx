'use client'

import {useContext} from "react";
import {CartContext} from "@/contexts/cart.context";

const UseCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}

export default UseCart