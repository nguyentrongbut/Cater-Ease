import {ChefHat} from "lucide-react";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-end space-x-2">
            <ChefHat className="h-8 w-8 text-primary"/>
            <span className="text-xl font-bold ">CaterEase</span>
        </Link>
    )
}

export default Logo