import {Button} from "@/components/ui/button";
import {Minus, Plus, Trash2} from "lucide-react";
import ImageWithPlaceholder from "@/components/common/image.w.placeholder";
import {formatCurrency} from "@/utils/formatCurrency";
import {TCartItemQ} from "@/types";

const DetailCartItem = ({dish, updateQuantity, removeItem}
                        : {
    dish:TCartItemQ
    updateQuantity: (id: string, quantity: number) => void,
    removeItem: (id: string) => void,
}) => {

    return (
        <div className="flex items-center gap-4 p-4 border rounded-lg justify-between">
            <div className="flex gap-3 items-center w-[30%]">
                <ImageWithPlaceholder
                    src={dish.image}
                    width={50}
                    height={50}
                    alt={dish.name}
                    className="rounded-lg size-12 flex-shrink-0 object-cover"
                ></ImageWithPlaceholder>
                <h4 className="font-medium md:line-clamp-1">{dish.name}</h4>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(dish.id, dish.quantity - 1)}
                >
                    <Minus className="h-3 w-3"/>
                </Button>
                <span className="w-12 text-center font-medium">{dish.quantity}</span>
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(dish.id, dish.quantity + 1)}
                >
                    <Plus className="h-3 w-3"/>
                </Button>
            </div>
            <p className="font-bold">{formatCurrency(dish.price)}</p>
            <p className="font-bold text-primary">{(formatCurrency(dish.price * dish.quantity) )}</p>
            <Button
                size="sm"
                variant="ghost"
                onClick={() => removeItem(dish.id)}
                className="text-primary hover:text-primary hover:bg-red-50"
            >
                <Trash2 className="h-4 w-4"/>
            </Button>
        </div>
    )
}

export default DetailCartItem