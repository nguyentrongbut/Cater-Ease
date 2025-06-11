import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";

const SearchEventMenu = () => {
    return (
        <div className="flex-1 relative">
            <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"/>
            <Input
                placeholder="Search event menu..."
                className="pl-10"
            />
        </div>
    )
}

export default SearchEventMenu;