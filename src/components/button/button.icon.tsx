import * as React from "react";
import Link from "next/link";

const ButtonIcon = ({href, icon, children}: {href:string, icon:React.ReactElement, children:React.ReactNode}) => {
    return (
        <Link href={href} className="flex items-center gap-2">
            {icon}
            {children}
        </Link>
    )
}

export default ButtonIcon