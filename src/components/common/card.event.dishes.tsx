import {Button} from "@/components/ui/button";
import {MapPin, ShoppingCart, Star, Users} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {TListEventMenu} from "@/types";
import HeartToggle from "@/components/common/heart.toggle";
import ImageWPlaceholder from "@/components/common/image.w.placeholder";
import AddToCart from "@/components/pages/event-dishes/add.to.cart";

const CardEventDishes = ({ eventMenu }: { eventMenu: TListEventMenu }) => {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow group relative">
            <div className="relative">
                <ImageWPlaceholder
                    width={400}
                    height={200}
                    src={eventMenu.image || "/placeholder-img.png"}
                    alt={eventMenu.name || 'placeholder image cater ease'}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 cursor-pointer flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <HeartToggle></HeartToggle>
                    <AddToCart eventMenu={eventMenu}>
                        <div className="p-3 bg-background/90 rounded-lg cursor-pointer">
                            <ShoppingCart className="size-4"/>
                        </div>
                    </AddToCart>
                </div>
            </div>

            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{eventMenu.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-0.5">
                            <MapPin className="size-4" />
                            {eventMenu.location} • {eventMenu.cuisine}
                        </CardDescription>
                    </div>
                    <Badge variant="secondary">{eventMenu.priceRange} $</Badge>
                </div>
            </CardHeader>

            <CardContent>
                <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{eventMenu.rating}</span>
                        <span className="text-gray-500 text-sm dark:text-gray-200">({eventMenu.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <Users className="size-4" />
                        <span className="text-sm">Min {eventMenu.minOrder}</span>
                    </div>
                </div>

                <div className="flex gap-2 mb-4">
                    {eventMenu.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                        </Badge>
                    ))}
                </div>

                <div className="flex gap-2">
                    <Link href={`/event-dishes/${eventMenu.slug}`} className="flex-1">
                        <Button className="w-full">View Menu</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardEventDishes;