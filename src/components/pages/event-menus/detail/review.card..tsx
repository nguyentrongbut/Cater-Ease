import {Card, CardContent} from "@/components/ui/card";
import {Star} from "lucide-react";

const ReviewCard = ({name, createdAt, comment, rating} : {name: string, createdAt: string, comment: string, rating:number}) => {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="font-medium">{name}</h4>
                        <div className="flex items-center gap-2 mt-1.5">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-3 w-3 ${
                                            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-200">{createdAt}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{comment}</p>
            </CardContent>
        </Card>
    )
}

export default ReviewCard;