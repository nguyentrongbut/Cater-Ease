import {TListEventMenu} from "@/types";
import CardEventMenu from "@/components/common/card.event.menu";

const ListCardEventMenu = ({listEventMenus} : {listEventMenus: TListEventMenu[] | null}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listEventMenus && listEventMenus.map((eventMenu:TListEventMenu) => (
                <CardEventMenu
                    key={eventMenu.id}
                    eventMenu={eventMenu}
                ></CardEventMenu>
            ))}
        </div>
    )
}

export default ListCardEventMenu