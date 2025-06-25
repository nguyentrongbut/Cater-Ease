'use client'

import useCart from "@/hooks/useCart";
import {Button} from "@/components/ui/button";
import {Minus, Plus} from "lucide-react";
import {TDish} from "@/types";

const CtaUpdateCart = ({ dish }: { dish: TDish }) => {
    const { items, addItem, removeItem } = useCart();

    const {id, name, categoryName, price, image } = dish

    const cartItem = items.find(item => item.id === dish.id);
    const quantity = cartItem?.quantity ?? 0;

    return (
        <div className="flex items-center gap-2">
            <Button
                size="sm"
                variant="outline"
                onClick={() => removeItem(dish.id)}
                disabled={quantity <= 0}
            >
                <Minus className="h-3 w-3"/>
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
                size="sm"
                variant="outline"
                onClick={() => addItem({
                    id,
                    name,
                    image,
                    price,
                    categoryName,
                })}
            >
                <Plus className="h-3 w-3"/>
            </Button>
        </div>
    );
}

export default CtaUpdateCart;
