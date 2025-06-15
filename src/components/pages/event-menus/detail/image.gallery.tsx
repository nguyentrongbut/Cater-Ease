'use client'

import ImageWithPlaceholder from "@/components/common/image.w.placeholder";
import {useState} from "react";

const ImageGallery = ({listImage, name}: { listImage: string[], name: string }) => {
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <div>
            <div>
                <ImageWithPlaceholder
                    src={listImage[selectedImage]}
                    alt={name}
                    width={800}
                    height={320}
                    className="w-full h-80 object-cover rounded-lg"
                />
            </div>
            {listImage.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto">
                    {listImage?.map((_, index) => (
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
                                src={listImage[index]}
                                alt={name}
                                className="w-full h-full object-cover"/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ImageGallery