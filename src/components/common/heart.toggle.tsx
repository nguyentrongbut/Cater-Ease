'use client';

import {Heart} from "lucide-react";
import { useState } from "react";
import HeartIcon from "@/components/icons/heart.icon";
import toast from "react-hot-toast";

const HeartToggle = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);

        toast(
            !isLiked ? 'Added to your favorites' : 'Removed from your favorites',
            {
                icon: !isLiked ? '❤️' : '💔',
                duration: 2000,
                className: 'bg-white text-black border border-gray-200',
            }
        );
    };

    return isLiked ? (
        <div onClick={handleLikeToggle}>
            <HeartIcon
                className="text-primary cursor-pointer"
            />
        </div>
    ) : (
        <Heart
            className="size-5 hover:text-primary cursor-pointer"
            onClick={handleLikeToggle}
        />
    );
};

export default HeartToggle;
