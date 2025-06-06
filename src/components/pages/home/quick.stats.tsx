import QuickStatsItem from "@/components/pages/home/quick.stats.item";
import {quickStatsData} from "@/constants";

const QuickStats = () => {
    return (
        <section className="py-12 bg-gray-50 dark:bg-background">
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
        </section>
    )
}

export default QuickStats;