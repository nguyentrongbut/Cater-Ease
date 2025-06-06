import { ChefHat } from "lucide-react";
import Link from "next/link";

const Logo = ({ size = "md" }: { size?: "md" | "lg" | "xl" }) => {
    const sizeMap = {
        md: {
            logo: "h-8 w-8",
            text: "text-xl",
        },
        lg: {
            logo: "h-10 w-10",
            text: "text-2xl",
        },
        xl: {
            logo: "h-12 w-12",
            text: "text-3xl",
        },
    };

    const { logo, text } = sizeMap[size];

    return (
        <Link href="/" className="flex items-end space-x-2">
            <ChefHat className={`${logo} text-primary`} />
            <span className={`font-bold ${text}`}>CaterEase</span>
        </Link>
    );
};

export default Logo;

