import FilterEventDishes from "@/components/pages/event-dishes/filter.event.dishes";
import SearchEventDishes from "@/components/pages/event-dishes/search.event.dishes";
import {TCuisine, TEvent} from "@/types";

const SearchFilterBar = ({listEvent}: {
    listEvent: TEvent[] | null
}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-4">

            <SearchEventDishes></SearchEventDishes>
            <div className="flex gap-2">
                <FilterEventDishes listEvent={listEvent}></FilterEventDishes>
            </div>
        </div>
    )
}

export default SearchFilterBar