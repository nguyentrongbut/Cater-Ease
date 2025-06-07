import SectionWrapper from "@/components/common/section.wrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Heading from "@/components/common/Heading";

const StartPlanning = () => {
    return (
        <SectionWrapper className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
                <Heading className="mb-4">Ready to Start Planning?</Heading>
                <p className="text-xl mb-8 opacity-90">
                    Join thousands of satisfied customers who trust us with their events.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/sign-up">
                        <Button size="lg" variant="outline" className="text-darkGray dark:text-white">
                            Sign Up as Customer
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white dark:border-white bg-transparent hover:bg-white hover:text-primary"
                        >
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default StartPlanning;