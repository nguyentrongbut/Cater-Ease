import { ChefHat } from "lucide-react";
import Link from "next/link";

const Logo = ({ size = "md" }: { size?: "md" | "lg" | "xl" }) => {
    const sizeMap = {
        md: {
            logo: "size-10",
            text: "text-2xl",
        },
        lg: {
            logo: "size-12",
            text: "text-4xl",
        },
        xl: {
            logo: "size-14",
            text: "text-6xl",
        },
    };

    const { logo, text } = sizeMap[size];

    return (
        <Link href="/" className="flex items-end space-x-2">
            <ChefHat className={`${logo} text-primary`} />
            <span className={`font-bold font-title ${text}`}>CaterEase</span>
        </Link>
    );
};

export default Logo;
