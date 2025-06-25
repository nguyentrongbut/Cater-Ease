import FilterEventDishes from "@/components/pages/event-dishes/filter.event.dishes";
import SearchEventDishes from "@/components/pages/event-dishes/search.event.dishes";

const SortBar = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4">

            <SearchEventDishes></SearchEventDishes>
            <div className="flex gap-2">
                <FilterEventDishes></FilterEventDishes>
            </div>
        </div>
    )
}

export default SortBar