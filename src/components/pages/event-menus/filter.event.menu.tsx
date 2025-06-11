import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {SlidersHorizontal} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Checkbox} from "@/components/ui/checkbox";
import {Slider} from "@/components/ui/slider";
import {TCuisine, TEvent} from "@/types";
import {Label} from "@/components/ui/label";

const FilterEventMenu = ({listEvent, listCuisines}: {
    listEvent: TEvent[] | null,
    listCuisines: TCuisine[] | null
}) => {
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        <SlidersHorizontal className="h-4 w-4 mr-2"/>
                        Filters
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="p-10 w-[1000px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-semibold mb-3">Cuisine Type</h3>
                            <div className="space-y-2">
                                {listCuisines && listCuisines.map((cuisine) => (
                                    <div key={cuisine.name} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={cuisine.name}
                                        />
                                        <Label htmlFor={cuisine.name} className="text-sm cursor-pointer font-normal">
                                            {cuisine.name}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Event Type</h3>
                            <div className="space-y-2">
                                {listEvent && listEvent.map((event) => (
                                    <div key={event.name} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={event.name}
                                        />
                                        <Label htmlFor={event.name} className="text-sm cursor-pointer font-normal">
                                            {event.name}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Price Range</h3>
                            <div className="space-y-4">
                                <Slider
                                    max={200} step={10}
                                    className="w-full"/>
                                <div className="flex justify-between text-sm text-gray-600">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end"><Button className="w-24">Apply</Button></div>
                </PopoverContent>
            </Popover>
            <Select>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="distance">Distance</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="delivery">Delivery Time</SelectItem>
                </SelectContent>
            </Select>
        </>
    );
};

export default FilterEventMenu;
