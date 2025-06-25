import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const FilterEventDishes = () => {
    return (
        <>
            <Select>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                </SelectContent>
            </Select>
        </>
    );
};

export default FilterEventDishes;
