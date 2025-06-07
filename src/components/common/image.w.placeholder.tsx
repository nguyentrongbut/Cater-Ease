'use client';

import Image from 'next/image';
import {cn} from "@/lib/utils";
import {useState} from 'react';

const ImageWithPlaceholder = ({
                                  src,
                                  alt,
                                  width,
                                  height,
                                  className,
                              }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={cn("relative", className)}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                onLoadingComplete={() => setLoaded(true)}
                className={`absolute top-0 left-0 transition-opacity duration-700 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
            />

            {!loaded && (
                <Image
                    src="/placeholder-img.png"
                    alt="Đang tải ảnh"
                    width={width}
                    height={height}
                    className={`absolute top-0 left-0 object-cover ${className}`}
                />
            )}
        </div>
    );
};

export default ImageWithPlaceholder;
