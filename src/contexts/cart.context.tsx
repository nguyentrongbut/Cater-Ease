'use client'

import React, {createContext, useEffect, useState} from "react";
import {TCartItemQ} from "@/types";

type TCartContextType = {
    items: TCartItemQ[];
    addItem: (item: Omit<TCartItemQ, 'quantity'>) => void;
    addItems: (items: Omit<TCartItemQ, 'quantity'>[]) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
};

export const CartContext = createContext<TCartContextType | undefined>(undefined);

const CartProvider = ({children}: { children: React.ReactNode }) => {
    const [items, setItems] = useState<TCartItemQ[]>([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    const addItem = (newItem: Omit<TCartItemQ, 'quantity'>) => {
        setItems((prevItems) => {
            const existItem = prevItems.find((item) => item.id === newItem.id);
            return existItem
                ? prevItems.map((item) =>
                    item.id === newItem.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
                : [...prevItems, {...newItem, quantity: 1}];
        });
    };

    const addItems = (newItems: Omit<TCartItemQ, 'quantity'>[]) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems];

            newItems.forEach(newItem => {
                const index = updatedItems.findIndex(item => item.id === newItem.id);

                if (index >= 0) {
                    updatedItems[index] = {
                        ...updatedItems[index],
                        quantity: updatedItems[index].quantity + 1
                    };
                } else {
                    // Nếu chưa có, thêm mới với quantity = 1
                    updatedItems.push({ ...newItem, quantity: 1 });
                }
            });

            return updatedItems;
        });
    };

    const updateQuantity = (id: string, quantity: number) => {
        return quantity <= 0
            ? removeItem(id)
            : setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id
                        ? {...item, quantity}
                        : item
                )
            );
    };

    const removeItem = (id: string) => {
        setItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const getTotalItems = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                addItems,
                removeItem,
                updateQuantity,
                clearCart,
                getTotalItems,
                getTotalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
