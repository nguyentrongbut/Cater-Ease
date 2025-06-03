import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

const LinkHover = ({href, children, className, ...props}: {
    href: string,
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <Link href={href} className={cn("hover:text-primary transition-colors", className)}
              {...props}
        >
            {children}
        </Link>
    )
}

export default LinkHover