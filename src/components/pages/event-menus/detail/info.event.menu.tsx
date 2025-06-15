import {CircleDollarSign, MapPin, Share2, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {TListEventMenu} from "@/types";
import {Badge} from "@/components/ui/badge";
import HeartToggle from "@/components/common/heart.toggle";

const InfoEventMenu = ({eventMenu}: { eventMenu: TListEventMenu | null }) => {
    return (
        <section className="h-full flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-3xl font-medium mb-2 font-title line-clamp-1">{eventMenu?.name}</h1>
                        <p className="text-gray-600 mb-2 line-clamp-1">{eventMenu?.cuisine} Cuisine</p>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                                <span className="font-medium">{eventMenu?.rating}</span>
                                <span className="text-gray-500">({eventMenu?.reviews} reviews)</span>
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

            <p className="text-gray-700 mb-6 line-clamp-3">{eventMenu?.description}</p>

            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 text-gray-500"/>
                    <span>{eventMenu?.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <CircleDollarSign className="size-4 text-gray-500" />
                    <span>{eventMenu?.priceRange} / 1 people</span>
                </div>
            </div>

            <div className="flex gap-2 mb-6">
                {eventMenu?.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline">
                        {specialty}
                    </Badge>
                ))}
            </div>

            <div className="flex gap-3">
                <Button className="flex-1">
                    Add Menu To Card
                </Button>
            </div>
        </section>

    )
}

export default InfoEventMenu