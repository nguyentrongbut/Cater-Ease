import Heading from "@/components/typography/Heading";
import {Star} from "lucide-react";
import PostReview from "@/components/pages/event-menus/detail/post.review";
import {getProfile} from "@/lib/actions/account";
import {getListReview} from "@/lib/actions/review";
import ReviewCard from "@/components/pages/event-menus/detail/review.card.";
import {TReview} from "@/types";

const CustomerReviews = async ({rating, reviews, id}: { rating: number, reviews: number, id:string }) => {

    const infoProfile = await getProfile()
    const listReview = await getListReview(id)

    return (
        <section>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <Heading className="text-2xl">Reviews</Heading>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <div className="text-4xl font-bold text-primary">{rating}</div>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`h-4 w-4 ${  
                                        star
                                        <= Math.floor(rating)
                                            ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                        <div className="text-gray-600 dark:text-gray-200">{reviews} reviews</div>
                    </div>

                    <div className="md:col-span-3">
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <div key={rating} className="flex items-center gap-2">
                                    <span className="text-sm w-8">{rating}</span>
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400"/>
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-yellow-400 h-2 rounded-full"
                                            style={{
                                                width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 3 : 2}%`,
                                            }}
                                        />
                                    </div>
                                    <span className="text-sm text-gray-600 w-8 dark:text-gray-300">
                          {rating === 5 ? 87 : rating === 4 ? 25 : rating === 3 ? 6 : rating === 2 ? 4 : 2}
                        </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <PostReview infoProfile={infoProfile}></PostReview>

                <div className="space-y-6 mt-10 mb-20">
                    {listReview.map((review : TReview) => (
                        <ReviewCard
                            key={review.id}
                            name={review?.name}
                            rating={review?.rating}
                            comment={review?.comment}
                            createdAt={review?.createdAt}
                        ></ReviewCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews;