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

const Cart = () => {
    const {items, updateQuantity, removeItem, getTotalPrice} = useCart();

    const totalPrice = getTotalPrice();

    const [tableNumber, setTableNumber] = useState(5);

    // empty cart
    if (items.length === 0) {
        return <EmptyCart/>;
    }


    return (
        <ContainerWrapper className="py-8">

            <Heading as="h1" className="mb-6">Cart</Heading>
            <StepGuide
                step={1}
                text="Review the set of dishes"
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
                                {items.map((item) => (
                                    <DetailCartItem key={item.id}
                                                    id={item.id}
                                                    name={item.name}
                                                    image={item.image}
                                                    price={item.price}
                                                    quantity={item.quantity}
                                                    updateQuantity={updateQuantity}
                                                    removeItem={removeItem}
                                    ></DetailCartItem>
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
                    totalPrice={totalPrice}
                    numTable={tableNumber}
                ></OrderSummaryCart>
            </div>
        </ContainerWrapper>
    );
};

export default Cart;