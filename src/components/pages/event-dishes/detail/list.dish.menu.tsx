import {TDish} from "@/types";
import {Card, CardContent} from "@/components/ui/card";
import {formatCurrency} from "@/utils/formatCurrency";
import CtaUpdateCart from "@/components/pages/event-dishes/detail/cta.update.cart";

const ListDishMenu = ({groupDishesByCategory}: { groupDishesByCategory: Record<string, TDish[]> }) => {
    return (
        <>
            {Object.entries(groupDishesByCategory).map(([category, dishes]) => (
                <div key={category} className="mb-3">
                    <h3 className="text-xl font-semibold mb-4">{category}</h3>
                    <div className="space-y-4">

                    </div>
                    <div className="mt-2 flex flex-col gap-5">
                        {dishes.map(dish => (
                            <Card key={dish.id}>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h4 className="font-medium mb-1">{dish.name}</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{dish.description}</p>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <p className="font-bold text-lg">{formatCurrency(dish.price)}</p>
                                            <CtaUpdateCart dish={dish}></CtaUpdateCart>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListDishMenu;
