'use client';

import { useState } from 'react';
import { cn } from "@/lib/utils";

type Props = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};

const NativeImageWithPlaceholder = ({ src, alt, width, height, className }: Props) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className={cn("relative", className)}
            style={{ width, height }}
        >
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                onLoad={() => setLoaded(true)}
                className={cn(
                    "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700",
                    loaded ? "opacity-100" : "opacity-0"
                )}
            />

            {!loaded && (
                <img
                    src="/avatar-placeholder.png"
                    alt="Loading..."
                    width={width}
                    height={height}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            )}
        </div>
    );
};

export default NativeImageWithPlaceholder;
