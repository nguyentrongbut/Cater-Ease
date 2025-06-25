import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import ContainerWrapper from "@/components/common/container.wrapper";
import {getEventMenu} from "@/lib/actions/menu";
import ImageGallery from "@/components/pages/event-dishes/detail/image.gallery";
import InfoEventDishes from "@/components/pages/event-dishes/detail/info.event.dishes";
import CustomerReviews from "@/components/pages/event-dishes/detail/customer.reviews";
import {Params, TInfoImage} from "@/types";
import {groupDishesByCategory} from "@/utils/groupDishesByCategory";
import ListDishMenu from "@/components/pages/event-dishes/detail/list.dish.menu";
import Heading from "@/components/typography/Heading";


const EventMenuDetail = async ({params}: { params: Params }) => {
    const {slug} = await params
    const eventMenu = await getEventMenu(slug)

    if (!eventMenu) return null;

    const {id, name, averageRating, image, dishes, totalReviews} = eventMenu;

    const groupedCategory = groupDishesByCategory(dishes);

    const infoImage: TInfoImage = {
        name: name,
        image: image
    }

    const listInfoImage: TInfoImage[] = [
        infoImage,
        ...(
            dishes?.length
                ? dishes
                    .filter(dish => dish.image && dish.name)
                    .map(dish => ({ name: dish.name, image: dish.image }))
                : []
        )
    ];

    return (
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
                        <BreadcrumbLink asChild>
                            <Link href="/menu">Menu</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <span>/</span>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {eventMenu?.name}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <ImageGallery infoImage={listInfoImage} name={name}></ImageGallery>
                <InfoEventDishes eventMenu={eventMenu}></InfoEventDishes>
            </div>

            <Heading className="text-2xl mb-6">Menu</Heading>

            <ListDishMenu groupDishesByCategory={groupedCategory}></ListDishMenu>

            <div className="mt-12">
                <CustomerReviews id={id} rating={averageRating} reviews={totalReviews}></CustomerReviews>
            </div>
        </ContainerWrapper>
    )
}

export default EventMenuDetail