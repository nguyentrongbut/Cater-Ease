import {getListEventMenus} from "@/lib/actions/event.menus";
import ContainerWrapper from "@/components/common/container.wrapper";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Heading from "@/components/common/Heading";
import SearchFilterBar from "@/components/pages/event-menus/search.filter.bar";
import ListCardEventMenu from "@/components/common/list.card.event.menu";
import SectionWrapper from "@/components/common/section.wrapper";
import {getListEvent} from "@/lib/actions/category.events";
import {getListCuisine} from "@/lib/actions/genre.cuisine";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const EventMenus = async ({searchParams}: {searchParams : SearchParams}) => {

    const { keyword } = await searchParams;
    const listEventMenus = await getListEventMenus(keyword || "");
    const listEvent = await getListEvent()
    const listCuisines = await getListCuisine()

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
                            <BreadcrumbPage>Event Menus</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="mb-8">
                    <Heading>Find Your Perfect Event Menu</Heading>
                    <p className="text-gray-600 text-sm mt-2">Discover amazing caterers in your area</p>
                </div>

                <SearchFilterBar listEvent={listEvent} listCuisines={listCuisines}></SearchFilterBar>

                <SectionWrapper>
                    <ListCardEventMenu listEventMenus={listEventMenus}></ListCardEventMenu>
                </SectionWrapper>
            </ContainerWrapper>
        </>
    )
}

export default EventMenus;