import React from "react";
import {cn} from "@/lib/utils";

const CardProfile = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return (
        <section
            className={cn("bg-background p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700", className)}>
            {children}
        </section>
    )
}

export default CardProfile