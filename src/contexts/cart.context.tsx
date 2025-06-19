'use client'

import React, {createContext, useEffect, useState} from "react";
import { TCartItem } from "@/types";

type TCartContextType = {
    items: TCartItem[],
    addItem: (item: Omit<TCartItem, 'quantity'>) => void,
    removeItem: (id: string) => void,
    updateQuantity: (id: string, quantity: number) => void,
    clearCart: () => void,
    getTotalItems: () => number,
    getTotalPrice: () => number
}

export const CartContext = createContext<TCartContextType | undefined>(undefined)

const CartProvider = ({children} : {children: React.ReactNode}) => {
    const [items, setItems] = useState<TCartItem[]>([])

    useEffect(() => {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            setItems(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items))
    }, [items])

    const addItem = (newItem: Omit<TCartItem, 'quantity'>) => {
        setItems((prevItems) => {
            const existItem = prevItems.find((item) => item.id === newItem.id)
            return existItem
                ? prevItems.map((item) => (item.id === newItem.id) ? {...item, quantity: item.quantity + 1} : item)
                : [...prevItems, {...newItem, quantity: 1}]
        })
    }

    const updateQuantity = (id: string, quantity: number) => {
        return quantity <= 0
            ? removeItem(id)
            : setItems((prevItems) => prevItems.map((item) => (
                item.id === id
                    ? { ...item, quantity}
                    : item
            )))
    }

    const removeItem = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setItems([])
    }

    const getTotalItems = () => {
        return items.reduce((total, item) =>  total + item.quantity, 0)
    }

    const getTotalPrice = () => {
        return items.reduce((total, item) =>  total + item.price * item.quantity, 0)
    }
    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                getTotalItems,
                getTotalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider