import {Button} from "@/components/ui/button";
import {ShoppingCart, Star} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import HeartToggle from "@/components/common/heart.toggle";
import ImageWPlaceholder from "@/components/common/image.w.placeholder";
import AddToCart from "@/components/pages/event-dishes/add.to.cart";
import {TMenu} from "@/types";
import {groupDishesByCategory} from "@/utils/groupDishesByCategory";
import {formatCurrency} from "@/utils/formatCurrency";
import ListDish from "@/components/common/list.dish";

const CardEventDishes = ({eventMenu}: { eventMenu: TMenu }) => {
    const listDish = eventMenu.dishes
    const groupedCategory = groupDishesByCategory(listDish);

    return (
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow group relative">
            <div className="relative">
                <ImageWPlaceholder
                    width={400}
                    height={200}
                    src={eventMenu.image || "/placeholder-img.png"}
                    alt={eventMenu.name || 'placeholder image cater ease'}
                    className="w-full h-48 object-cover"
                />
                <div
                    className="absolute top-2 right-2 cursor-pointer flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <HeartToggle></HeartToggle>
                    <AddToCart eventMenu={listDish}>
                        <div className="p-3 bg-background/90 rounded-lg cursor-pointer">
                            <ShoppingCart className="size-4"/>
                        </div>
                    </AddToCart>
                </div>
            </div>

            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-lg">{eventMenu.name}</CardTitle>
                    </div>
                    <span className="text-primary font-semibold">{formatCurrency(eventMenu.price)}</span>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col flex-grow justify-between">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                        <Star className="size-4 fill-yellow-400 text-yellow-400"/>
                        <span className="font-medium">{eventMenu.averageRating}</span>
                        <span className="text-gray-500 text-sm dark:text-gray-200">({eventMenu.totalReviews})</span>
                    </div>
                </div>

                <ListDish groupDishesByCategory={groupedCategory}></ListDish>

                <div className="flex gap-2 mt-3">
                    <Link href={`/menu/${eventMenu.slug}`} className="flex-1">
                        <Button className="w-full">View Menu</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardEventDishes;