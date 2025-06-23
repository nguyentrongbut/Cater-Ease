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

type Params = Promise<{ slug: string }>

const EventMenuDetail = async ({params}: { params: Params }) => {
    const {slug} = await params
    const eventMenu = await getEventMenu(slug)

    if (!eventMenu) return null;

    const {id, name, rating, images, image, reviews} = eventMenu;

    const listImage: string[] = images
        ? [image, ...images]
        : [image];

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
                            <Link href="/event-dishes">Event Dishes</Link>
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
                <ImageGallery listImage={listImage} name={name}></ImageGallery>
                <InfoEventDishes eventMenu={eventMenu}></InfoEventDishes>
            </div>

            <CustomerReviews id={id} rating={rating} reviews={reviews}></CustomerReviews>
        </ContainerWrapper>
    )
}

export default EventMenuDetail