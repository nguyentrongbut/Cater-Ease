import * as React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

const LinkIcon = ({href, icon, children, className, target, ...props}: {
    href: string,
    className?: string,
    target?: string,
    icon: React.ReactElement,
    children: React.ReactNode
}) => {
    return (
        <Link href={href} target={target} className={cn('flex items-center gap-2', className)}
              {...props}
        >
            {icon}
            {children}
        </Link>
    )
}

export default LinkIcon