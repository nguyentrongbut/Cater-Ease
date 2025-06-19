import React, {JSX} from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    className?: string;
};

const Heading = ({ as: Tag = "h2", children, className }: HeadingProps) => {
    return (
        <Tag className={cn("text-3xl font-semibold font-title", className)}>
            {children}
        </Tag>
    );
};

export default Heading;
