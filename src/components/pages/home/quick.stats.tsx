import QuickStatsItem from "@/components/pages/home/quick.stats.item";
import {quickStatsData} from "@/constants";
import SectionWrapper from "@/components/common/section.wrapper";
import ContainerWrapper from "@/components/common/container.wrapper";

const QuickStats = () => {
    return (
        <SectionWrapper color>
            <ContainerWrapper>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-title">
                    {quickStatsData.map((item) => (
                        <QuickStatsItem
                            key={item.title}
                            number={item.number}
                            title={item.title}
                            plus={item.plus}
                        ></QuickStatsItem>
                    ))}
                </div>
            </ContainerWrapper>
        </SectionWrapper>
    )
}

export default QuickStats;