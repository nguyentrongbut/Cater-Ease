'use client'

import {Button} from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import {TListEventMenu} from "@/types";
import toast from "react-hot-toast";

const AddToCart = ({eventMenu}: { eventMenu: TListEventMenu | null }) => {
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
        <Button onClick={handleAddToCart}>
            Add Food To Cart
        </Button>
    )
}

export default AddToCart