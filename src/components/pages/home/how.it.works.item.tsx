import React from "react";
import {THowItWorkItem} from "@/types";

const HowItWorksItem = ({item, index} : {item : THowItWorkItem, index:number}) => {
    return (
        <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{index}. {item.title}</h3>
            <p className="text-gray-600 dark:text-white">
                {item.desc}
            </p>
        </div>
    )
}

export default HowItWorksItem