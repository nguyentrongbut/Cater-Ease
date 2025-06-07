import SectionWrapper from "@/components/common/section.wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import CardEventMenu from "@/components/pages/home/card.event.menu";
import ContainerWrapper from "@/components/common/container.wrapper";
import {getFeaturedEventMenus} from "@/lib/actions/event.menus";
import {TListEventMenu} from "@/types";

const listEventMenus = await getFeaturedEventMenus();

const FeaturedEventMenu = () => {
    return (
        <SectionWrapper className="py-16">
            <ContainerWrapper>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Featured Event Menu</h2>
                    <Link href="/event-menus">
                        <Button variant="ghost">View All</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listEventMenus.map((eventMenu:TListEventMenu) => (
                       <CardEventMenu
                           key={eventMenu.id}
                           eventMenu={eventMenu}
                       ></CardEventMenu>
                    ))}
                </div>
            </ContainerWrapper>
        </SectionWrapper>
    )
}

export default FeaturedEventMenu;