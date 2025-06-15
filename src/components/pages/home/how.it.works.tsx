import SectionWrapper from "@/components/common/section.wrapper";
import Heading from "@/components/typography/Heading";
import HowItWorksItem from "@/components/pages/home/how.it.works.item";
import { howItWorkItems } from "@/constants";
import { THowItWorkItem } from "@/types";
import ContainerWrapper from "@/components/common/container.wrapper";

const HowItWorks = () => {
    return (
        <SectionWrapper color className="py-16 bg-gray-50">
            <ContainerWrapper>
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
            </ContainerWrapper>
        </SectionWrapper>
    );
};

export default HowItWorks;
