'use client'

import {ButtonBadge} from "@/components/button";
import {ShoppingCart} from "lucide-react";
import useCart from "@/hooks/useCart";
import {Badge} from "@/components/ui/badge";

const BtnCart = () => {
    const {getTotalItems} = useCart()
    const totalItems = getTotalItems()

    return (
        <div className="relative">
            <ButtonBadge
                href="/cart"
                icon={
                    <ShoppingCart className="h-5 w-5"/>
                }
            ></ButtonBadge>
            {totalItems > 0 && (
                <Badge variant="circle" className="absolute -right-2 -top-1">
                    {totalItems}
                </Badge>
            )}
        </div>
    )
}

export default BtnCart