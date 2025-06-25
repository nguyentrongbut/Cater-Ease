'use client'

import useCart from "@/hooks/useCart";
import Heading from "@/components/typography/Heading";
import ContainerWrapper from "@/components/common/container.wrapper";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import EmptyCart from "@/components/pages/cart/empty.cart";
import DetailCartItem from "@/components/pages/cart/detail.cart.item";
import OrderSummaryCart from "@/components/pages/cart/order.summary.cart";
import StepGuide from "@/components/common/step.guide";
import FormBooking from "@/components/pages/cart/form.booking";
import {useState} from "react";
import {formatCurrency} from "@/utils/formatCurrency";
import {groupDishesByCategory} from "@/utils/groupDishesByCategory";

const Cart = () => {
    const {items, updateQuantity, removeItem, getTotalPrice} = useCart();

    const totalPrice = getTotalPrice();

    const [tableNumber, setTableNumber] = useState(5);

    const convertTotalPrice = formatCurrency(totalPrice);
    const totalTableNumber = formatCurrency(totalPrice * tableNumber);

    // empty cart
    if (items.length === 0) {
        return <EmptyCart/>;
    }

    const groupedCategory = groupDishesByCategory(items);

    return (
        <ContainerWrapper className="py-8">

            <Heading as="h1" className="mb-6">Cart</Heading>
            <StepGuide
                step={1}
                text="Review the menu"
                className="mb-3.5"
            ></StepGuide>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Cart Items</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {Object.entries(groupedCategory).map(([category, dishes]) => (
                                    <div key={category} className="mb-3">
                                        <h3 className="text-xl font-semibold mb-4">{category}</h3>
                                        <div className="space-y-4">

                                        </div>
                                        <div className="mt-2 flex flex-col gap-5">
                                            {dishes.map(dish => (
                                                <DetailCartItem key={dish.id}
                                                                dish={dish}
                                                                updateQuantity={updateQuantity}
                                                                removeItem={removeItem}
                                                ></DetailCartItem>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <FormBooking
                        tableNumber={tableNumber}
                        setTableNumber={setTableNumber}
                        totalPrice={totalPrice}
                        items={items}
                    ></FormBooking>

                </div>

                <OrderSummaryCart
                    numTable={tableNumber}
                    totalPrice={convertTotalPrice}
                    totalTableNumber={totalTableNumber}
                ></OrderSummaryCart>
            </div>
        </ContainerWrapper>
    );
};

export default Cart;