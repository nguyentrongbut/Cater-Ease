import {getListEventMenus} from "@/lib/actions/menu";
import ContainerWrapper from "@/components/common/container.wrapper";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Heading from "@/components/typography/Heading";
import SearchFilterBar from "@/components/pages/event-dishes/search.filter.bar";
import ListCardEventDishes from "@/components/common/list.card.event.dishes";
import SectionWrapper from "@/components/common/section.wrapper";
import {getListEvent} from "@/lib/actions/event";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const EventMenus = async ({searchParams}: { searchParams: SearchParams }) => {

    const {keyword} = await searchParams;
    const normalizedKeyword = Array.isArray(keyword) ? keyword[0] : keyword || "";
    const listEventMenus = await getListEventMenus(normalizedKeyword);
    const listEvent = await getListEvent()

    return (
        <>
            <ContainerWrapper className="py-8">
                <Breadcrumb className="mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <span>/</span>
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Event Dishes</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="mb-8">
                    <Heading as="h1">Find Your Perfect Event Dishes</Heading>
                    <p className="text-gray-600 text-sm mt-2">Discover amazing dishes</p>
                </div>

                <SearchFilterBar listEvent={listEvent}></SearchFilterBar>

                <SectionWrapper>
                    <ListCardEventDishes listEventMenus={listEventMenus}></ListCardEventDishes>
                </SectionWrapper>
            </ContainerWrapper>
        </>
    )
}

export default EventMenus;