import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const OrderSummaryCart = ({totalPrice, numTable, detail, userId}: {
    totalPrice: number,
    numTable: number,
    detail?: boolean,
    userId?: string
}) => {
    return (
        <div>
            <Card className={`${!detail && "sticky top-4"}`}>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className={`space-y-4 ${detail && 'mt-6'}`}>
                    <div className="space-y-2.5">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${totalPrice}</span>
                        </div>
                        <div className="flex justify-between pb-2">
                            <span>Table Number</span>
                            <span>{numTable}</span>
                        </div>
                        <Separator/>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${(totalPrice) * numTable}</span>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        By proceeding, you agree to our Terms of Service and Privacy Policy
                    </p>
                    {detail && (
                        <Link href={`/checkout/${userId}`} className="block">
                            <Button className="w-full">
                                Checkout
                            </Button>
                        </Link>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default OrderSummaryCart