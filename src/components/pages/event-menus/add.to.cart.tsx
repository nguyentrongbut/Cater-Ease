'use client'

import {Button} from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import {TListEventMenu} from "@/types";

const AddToCart = ({eventMenu}: { eventMenu: TListEventMenu | null }) => {
    const { addItem } = useCart()
    if (!eventMenu) return
    const {id, name, priceRange} = eventMenu

    const handleAddToCart = () => {
        addItem({
            id,
            name,
            price: priceRange
        })
    }

    return (
        <Button onClick={handleAddToCart}>
            Add Food To Cart
        </Button>
    )
}

export default AddToCart