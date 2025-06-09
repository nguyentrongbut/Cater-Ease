import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload } from "lucide-react";
import {ChangeEvent, useState} from "react";

const TabUploadImg = ({ onChange } : {onChange : (val: string | File) => void}) => {
    const [preview, setPreview] = useState("/default-avatar.png");
    const [linkInput, setLinkInput] = useState("");

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setPreview(URL.createObjectURL(file));
            onChange(file);
        }
    };

    const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value;
        setLinkInput(url);
        setPreview(url);
        onChange(url);
    };

    return (
        <Tabs defaultValue="upload">
            <TabsList className="mb-2">
                <TabsTrigger value="upload">Upload image</TabsTrigger>
                <TabsTrigger value="link">Enter image link</TabsTrigger>
            </TabsList>

            <TabsContent value="upload">
                <div className="flex justify-center p-2">
                    <div className="relative size-20 rounded-full overflow-hidden group">
                        <img
                            src={preview || "/default-avatar.png"}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            <Upload className="text-white size-5" />
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="link">
                <Input
                    type="text"
                    placeholder="Paste your image URL"
                    value={linkInput}
                    onChange={handleLinkChange}
                />
            </TabsContent>
        </Tabs>
    );
};

export default TabUploadImg;
