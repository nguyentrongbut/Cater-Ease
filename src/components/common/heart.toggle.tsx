'use client';

import {Heart} from "lucide-react";
import {useState} from "react";
import HeartIcon from "@/components/icons/heart.icon";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import useInfoProfileClient from "@/hooks/useInfoProfileClient";

const HeartToggle = () => {
    const [isLiked, setIsLiked] = useState(false);
    const router = useRouter();
    const { infoProfile } = useInfoProfileClient();

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);

        toast(
            !isLiked ? 'Added to your favorites' : 'Removed from your favorites',
            {
                icon: !isLiked ? '❤️' : '💔',
                duration: 2000,
                className: 'bg-white text-black border border-gray-200 text-sm',
            }
        );
    };

    const handleLoginRedirect = () => {
        router.push('/login');

        toast('Please log in to like items.', {
            icon: '🔒',
            duration: 2000,
            className: 'bg-white text-black border border-gray-200 text-sm',
        });
    };

    if (!infoProfile) {
        return (
            <div onClick={handleLoginRedirect} className="p-3 bg-background/90 rounded-lg cursor-pointer">
                <Heart className="size-4 hover:text-primary"/>
            </div>
        );
    }


    return isLiked ? (
        <div onClick={handleLikeToggle} className="p-3 bg-background/90 rounded-lg cursor-pointer">
            <HeartIcon
                className="text-primary"
            />
        </div>
    ) : (
        <div onClick={handleLikeToggle} className="p-3 bg-background/90 rounded-lg cursor-pointer">
            <Heart
                className="size-4 hover:text-primary"
            />
        </div>
    );
};

export default HeartToggle;
