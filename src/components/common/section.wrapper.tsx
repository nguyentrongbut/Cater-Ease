import React from "react";
import {cn} from "@/lib/utils";

const SectionWrapper = ({children, color = false, className}: {
    children: React.ReactNode,
    color?: boolean,
    className?: string
}) => {
    return (
        <section className={cn(
            color ? "bg-gray-50 dark:bg-darkGray" : "",
            "py-12",
            className
        )}>
            {children}
        </section>
    );
}

export default SectionWrapper