import React from "react";
import {cn} from "@/lib/utils";

const Heading = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return (
        <h2 className={cn("text-3xl font-semibold font-title", className)}>{children}</h2>
    )
}

export default Heading;