'use client'

import ImageWithPlaceholder from "@/components/common/image.w.placeholder";
import { useState } from "react";
import { TInfoImage } from "@/types";

const ImageGallery = ({ infoImage, name }: { infoImage: TInfoImage[]; name: string }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div>
            <div>
                <ImageWithPlaceholder
                    src={infoImage[selectedImage]?.image}
                    alt={infoImage[selectedImage]?.name || name}
                    width={800}
                    height={320}
                    className="w-full h-80 object-cover rounded-lg"
                />
            </div>

            {infoImage.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto">
                    {infoImage.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`size-20 rounded-lg overflow-hidden border-2 flex-shrink-0 cursor-pointer ${
                                selectedImage === index ? "border-primary" : "border-gray-200 dark:border-darkGray"
                            }`}
                        >
                            <ImageWithPlaceholder
                                width={80}
                                height={80}
                                src={img.image}
                                alt={img.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
