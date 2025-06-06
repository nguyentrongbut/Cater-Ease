import QuickStatsItem from "@/components/pages/home/quick.stats.item";
import {quickStatsData} from "@/constants";
import SectionWrapper from "@/components/common/section.wrapper";

const QuickStats = () => {
    return (
        <SectionWrapper color>
            <div className="container mx-auto px-4">
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
            </div>
        </SectionWrapper>
    )
}

export default QuickStats;