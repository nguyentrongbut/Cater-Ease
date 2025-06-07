import {TQuickStats} from "@/types";

const QuickStatsItem = ({number, title, plus}: TQuickStats) => {
    return (
        <div>
            <div className="text-3xl font-bold text-primary">{number}{plus && "+"}</div>
            <div className="text-gray-600 dark:text-white mt-1">{title}</div>
        </div>
    )
}

export default QuickStatsItem