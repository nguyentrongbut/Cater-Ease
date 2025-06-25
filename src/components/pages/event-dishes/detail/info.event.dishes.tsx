import {Button} from "@/components/ui/button";
import {TMenu} from "@/types";
import HeartToggle from "@/components/common/heart.toggle";
import AddToCart from "@/components/pages/event-dishes/add.to.cart";
import {CircleDollarSign, Share2, Star} from "lucide-react";

const InfoEventDishes = ({eventMenu}: { eventMenu: TMenu | null }) => {
    const listDish = eventMenu?.dishes ?? null;
    return (
        <section className="h-full flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-3xl font-medium mb-2 font-title line-clamp-1">{eventMenu?.name}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                                <span className="font-medium">{eventMenu?.averageRating}</span>
                                <span className="text-gray-500 dark:text-gray-400">({eventMenu?.totalReviews} reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-flex gap-2 h-10">
                    <HeartToggle></HeartToggle>
                    <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4"/>
                    </Button>
                </div>
            </div>

            <p className="text-gray-700 dark:text-gray-200 mb-6 line-clamp-3">{eventMenu?.description}</p>

            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                    <CircleDollarSign className="size-4 text-gray-500 dark:text-gray-300" />
                    {eventMenu?.price}
                </div>
            </div>

            <AddToCart eventMenu={listDish}>
                <Button className="w-full">
                    Add menu to cart
                </Button>
            </AddToCart>
        </section>

    )
}

export default InfoEventDishes