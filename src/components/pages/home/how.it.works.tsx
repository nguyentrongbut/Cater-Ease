import SectionWrapper from "@/components/common/section.wrapper";
import Heading from "@/components/common/Heading";
import HowItWorksItem from "@/components/pages/home/how.it.works.item";
import { howItWorkItems } from "@/constants";
import { THowItWorkItem } from "@/types";

const HowItWorks = () => {
    return (
        <SectionWrapper color className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <Heading className="text-center mb-12">How It Works</Heading>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {howItWorkItems.map((item: THowItWorkItem, index: number) => (
                        <HowItWorksItem
                            key={index}
                            item={item}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default HowItWorks;
