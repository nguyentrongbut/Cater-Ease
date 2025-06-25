import {formatCurrency} from "@/utils/formatCurrency";
import {TDish} from "@/types";

const ListDish = ({groupDishesByCategory} : {groupDishesByCategory : Record<string, TDish[]>}) => {
    return (
        <div>
            {Object.entries(groupDishesByCategory).map(([category, dishes]) => (
                <div key={category} className="mb-3">
                    <p className="font-title text-sm">{category}:</p>
                    <ul className="text-[13px] text-gray-600 dark:text-gray-400 mt-2">
                        {dishes.map(dish => (
                            <li key={dish.id} className="flex justify-between">
                                <span>{dish.name}</span>
                                <span>{formatCurrency(dish.price)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ListDish