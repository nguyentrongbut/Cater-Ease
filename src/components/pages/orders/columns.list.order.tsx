"use client"

import {ColumnDef} from "@tanstack/react-table"
import dayjs from "dayjs"
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

export type ListOrder = {
    id: string
    tableNumber: number
    eventDate: Date
    subTotal: number
    status: "pending" | "processing" | "success" | "failed"
}

export const columnsListOrder: ColumnDef<ListOrder>[] = [
    {
        accessorKey: "id",
        header: "Order ID",
    },
    {
        accessorKey: "eventDate",
        header: "Event Date",
        cell: ({row}) => (
            <div>
                {dayjs(row.original.eventDate).format("DD/MM/YYYY")}
            </div>
        ),
    },
    {
        accessorKey: "subTotal",
        header: "Total",
        cell: ({row}) => (
            <div>
                $ {row.original.subTotal}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
            const status = row.original.status
            const color =
                status === "success"
                    ? "bg-green-600"
                    : status === "processing"
                        ? "bg-blue-600"
                        : status === "pending"
                            ? "bg-yellow-600"
                            : "bg-red-600"

            return (
                <Badge className={`${color}`}>
                    {status}
                </Badge>
            )
        },
    },
    {
        id: "action",
        header: "Action",
        cell: ({ row }) => (
            <div>
                <Link
                    href={`/orders/${row.original.id}`}
                    className="text-primary"
                >
                    View Detail
                </Link>
            </div>
        ),
    },
]
