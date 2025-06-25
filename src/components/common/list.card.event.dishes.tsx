import CardEventDishes from "@/components/common/card.event.dishes";
import {TMenu} from "@/types";

const ListCardEventDishes = ({listEventMenus} : {listEventMenus: TMenu[] | null}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listEventMenus && listEventMenus.map((eventMenu:TMenu) => (
                <CardEventDishes
                    key={eventMenu.id}
                    eventMenu={eventMenu}
                ></CardEventDishes>
            ))}
        </div>
    )
}

export default ListCardEventDishes