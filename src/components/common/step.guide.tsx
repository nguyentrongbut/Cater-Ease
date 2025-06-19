import {cn} from "@/lib/utils";

const StepGuide = ({step, text, className}: { step: number, text: string, className?: string }) => {
    return (
        <div className={cn(`mb-3.5 flex items-center text-sm font-bold gap-3`, className)}>
            <div className="px-2 py-0.5 border border-gray-400 text-gray-400 rounded-lg">
                {step}
            </div>
            <p className="line-clamp-1">
                {text}
            </p>
        </div>
    )
}

export default StepGuide