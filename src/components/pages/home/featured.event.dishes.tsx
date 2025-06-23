import SectionWrapper from "@/components/common/section.wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import ContainerWrapper from "@/components/common/container.wrapper";
import {getFeaturedEventMenus} from "@/lib/actions/menu";
import Heading from "@/components/typography/Heading";
import ListCardEventDishes from "@/components/common/list.card.event.dishes";

const listEventMenus = await getFeaturedEventMenus();

const FeaturedEventDishes = () => {
    return (
        <SectionWrapper className="py-16">
            <ContainerWrapper>
                <div className="flex justify-between items-center mb-8">
                    <Heading>Featured Event Dishes</Heading>
                    <Link href="/event-dishes">
                        <Button variant="ghost">View All</Button>
                    </Link>
                </div>

                <ListCardEventDishes listEventMenus={listEventMenus}></ListCardEventDishes>
            </ContainerWrapper>
        </SectionWrapper>
    )
}

export default FeaturedEventDishes;