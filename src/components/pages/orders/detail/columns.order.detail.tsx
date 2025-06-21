"use client"

import {ColumnDef} from "@tanstack/react-table"
import ImageWithPlaceholder from "@/components/common/image.w.placeholder";

export type OrderDetail = {
    id: string
    name: string
    price: number
    image: string
    quantity: number
}

export const columnsOrderDetail: ColumnDef<OrderDetail>[] = [
    {
        accessorKey: "name",
        header: "Name Dish",
    },
    {
        accessorKey: "image",
        header: "Image Dish",
        cell: ({row}) => {
            const {name, image} = row.original
            return (
                <div>
                    <ImageWithPlaceholder
                        alt={name} src={image}
                        width={96} height={64}
                        className="rounded-lg w-24 h-16">
                    </ImageWithPlaceholder>
                </div>
            )
        }
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "price",
        header: "Price"
    },
    {
        id: "subTotal",
        header: "Subtotal",
        cell: ({row}) => {
            const {price, quantity} = row.original;
            const subtotal = price * quantity;

            return `$ ${subtotal}`
        },
    }
]
