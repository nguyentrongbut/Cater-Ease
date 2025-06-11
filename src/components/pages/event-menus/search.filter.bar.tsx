import FilterEventMenu from "@/components/pages/event-menus/filter.event.menu";
import SearchEventMenu from "@/components/pages/event-menus/search.event.menu";
import {TCuisine, TEvent} from "@/types";

const SearchFilterBar = ({listEvent, listCuisines}: {
    listEvent: TEvent[] | null,
    listCuisines: TCuisine[] | null
}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-4">

            <SearchEventMenu></SearchEventMenu>
            <div className="flex gap-2">
                <FilterEventMenu listEvent={listEvent} listCuisines={listCuisines}></FilterEventMenu>
            </div>
        </div>
    )
}

export default SearchFilterBar