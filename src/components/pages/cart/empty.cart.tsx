import {ShoppingCart} from "lucide-react";
import Heading from "@/components/typography/Heading";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const EmptyCart = () => {
    return (
        <section className="min-h-screen bg-background flex flex-col justify-center items-center px-10">
            <div className="container mx-auto">
                <div className="text-center">
                    <ShoppingCart className="size-20 md:size-24 text-gray-300 mx-auto mb-6"/>
                    <Heading as="h1" className="mb-4">Your Cart is Empty</Heading>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Looks like you haven&apos;t   added any items to your cart yet. Start exploring our amazing caterers!
                    </p>
                    <Link href="/event-dishes">
                        <Button size="lg">Browse Caterers</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default EmptyCart;