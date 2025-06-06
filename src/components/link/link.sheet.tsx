import * as React from "react"
import Link from "next/link"
import {SheetClose} from "@/components/ui/sheet"

const LinkSheet = ({
                       href,
                       number = 0,
                       children,
                   }: {
    href?: string
    number?: number
    children: React.ReactNode
}) => {
    const content = (
        <div className="flex justify-between items-center w-full">
            {children}
            {number > 0 && <span className="text-xs text-primary font-bold">{number}</span>}
        </div>
    )

    return (
        <SheetClose asChild>
            {href ? (
                <Link href={href} className="w-full">
                    {content}
                </Link>
            ) : (
                <div className="w-full text-left">
                    {content}
                </div>
            )}
        </SheetClose>
    )
}

export default LinkSheet
