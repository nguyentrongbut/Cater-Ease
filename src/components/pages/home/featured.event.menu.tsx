import SectionWrapper from "@/components/common/section.wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import CardEventMenu from "@/components/pages/home/card.event.menu";

const featuredCaterers = [
    {
        id: "1",
        name: "Gourmet Delights",
        slug: "gourmet-delights",
        cuisine: "Italian",
        rating: 4.8,
        reviews: 124,
        location: "Downtown",
        minOrder: 50,
        image: "/placeholder.svg?height=200&width=300",
        specialties: ["Wedding", "Corporate"],
        priceRange: 5000,
    },
    {
        id: "2",
        name: "Spice Route",
        slug: "spice-route",
        cuisine: "Indian",
        rating: 4.6,
        reviews: 89,
        location: "Midtown",
        minOrder: 40,
        image: "/placeholder.svg?height=200&width=300",
        specialties: ["Birthday", "Festival"],
        priceRange: 6000,
    },
    {
        id: "3",
        name: "Fresh & Local",
        slug: "fresh-local",
        cuisine: "American",
        rating: 4.9,
        reviews: 156,
        location: "Uptown",
        minOrder: 60,
        image: "/placeholder.svg?height=200&width=300",
        specialties: ["Corporate", "Casual"],
        priceRange: 7000,
    },
    {
        id: "4",
        name: "Mediterranean Magic",
        slug: "mediterranean-magic",
        cuisine: "Mediterranean",
        rating: 4.7,
        reviews: 203,
        location: "Westside",
        minOrder: 45,
        image: "/placeholder.svg?height=200&width=300",
        specialties: ["Wedding", "Casual"],
        priceRange: 8000,
    },
    {
        id: "5",
        name: "Asian Fusion",
        slug: "asian-fusion",
        cuisine: "Asian",
        rating: 4.5,
        reviews: 178,
        location: "Downtown",
        minOrder: 35,
        image: "/placeholder.svg?height=200&width=300",
        specialties: ["Corporate", "Birthday"],
        priceRange: 9000,
    },
    {
        id: "6",
        name: "Mexican Fiesta",
        slug: "mexican-fiesta",
        cuisine: "Mexican",
        rating: 4.8,
        reviews: 145,
        location: "Southside",
        minOrder: 30,
        image: "/placeholder.svg?height=200&width=300",
        specialties: ["Festival", "Casual"],
        priceRange: 10000,
    },
]
const FeaturedEventMenu = () => {
    return (
        <SectionWrapper className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Featured Event Menu</h2>
                    <Link href="/event-menus">
                        <Button variant="ghost">View All</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredCaterers.slice(0, 3).map((eventMenu) => (
                       <CardEventMenu
                           key={eventMenu.id}
                           eventMenu={eventMenu}
                       ></CardEventMenu>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}

export default FeaturedEventMenu;