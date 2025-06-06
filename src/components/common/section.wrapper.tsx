import React from "react";
import {cn} from "@/lib/utils";

const SectionWrapper = ({children, color = false} : {children: React.ReactNode, color?:boolean}) => {
    return (
        <section
            className={cn(
                "py-12",
                color && "bg-gray-50 dark:bg-darkGray"
            )}
        >
            {children}
        </section>
    );
}

export default SectionWrapper