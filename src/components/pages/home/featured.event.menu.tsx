import SectionWrapper from "@/components/common/section.wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import ContainerWrapper from "@/components/common/container.wrapper";
import {getFeaturedEventMenus} from "@/lib/actions/event.menus";
import Heading from "@/components/typography/Heading";
import ListCardEventMenu from "@/components/common/list.card.event.menu";

const listEventMenus = await getFeaturedEventMenus();

const FeaturedEventMenu = () => {
    return (
        <SectionWrapper className="py-16">
            <ContainerWrapper>
                <div className="flex justify-between items-center mb-8">
                    <Heading>Featured Event Menu</Heading>
                    <Link href="/event-menus">
                        <Button variant="ghost">View All</Button>
                    </Link>
                </div>

                <ListCardEventMenu listEventMenus={listEventMenus}></ListCardEventMenu>
            </ContainerWrapper>
        </SectionWrapper>
    )
}

export default FeaturedEventMenu;