import React from "react";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

const ButtonBadge = ({href, number = 0, icon}: { href: string, number?: number, icon: React.ReactElement }) => {
    return (
        <Link
            href={href}
        >
            <Button variant="ghost" size="icon" className="relative">
                {icon}
                {number > 0 && (
                    <Badge
                        className="absolute top-[5px] right-1 size-4 p-0 text-[10px] flex items-center justify-center"
                    >
                        {number}
                    </Badge>
                )}
            </Button>
        </Link>
    );
}

export default ButtonBadge;