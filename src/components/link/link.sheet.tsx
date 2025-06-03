import * as React from "react";
import Link from "next/link";
import {SheetClose} from "@/components/ui/sheet";

const LinkSheet = ({href, number = 0, children}: {href:string, number?:number, children:React.ReactNode}) => {
    return (
        <SheetClose asChild>
            <Link href={href} className="flex justify-between items-center">
                {children}
                {
                    number > 0 && (
                        <span className="text-xs text-primary font-bold">{number}</span>
                    )
                }
            </Link>
        </SheetClose>
    )
}

export default LinkSheet;