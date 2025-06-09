import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import CardProfile from "@/components/pages/profile/card.profile";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";
import InfoProfile from "@/components/pages/profile/info.profile";
import DialogUpdateProfile from "@/components/pages/profile/dialog.update.profile";
import DialogChangePassword from "@/components/pages/profile/dialog.change.password";
import maskString from "@/utils/mask.string";

const UpdateProfile = () => {
    return (
        <div>
            <CardProfile>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <Avatar className="size-14 md:size-16 cursor-default">
                            <AvatarImage src="kdd" alt="@shadcn"/>
                            <AvatarFallback>
                                <Image
                                    src="/default-avatar.png"
                                    alt="@shadcn"
                                    width={80}
                                    height={80}
                                    objectFit="cover"
                                ></Image>
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-md font-bold">Jay</h1>
                            <div className="text-[15px] text-muted-foreground flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                                <span>CEID: <span className="text-sm text-darkGray dark:text-white ml-2 md:ml-4">kdkkfdkdf</span></span>
                                <span className="flex items-center">Status:
                                <Badge variant="active" className="ml-2 md:ml-4">Active</Badge>
                                </span>
                            </div>
                        </div>
                    </div>
                    <DialogUpdateProfile></DialogUpdateProfile>
                </div>
            </CardProfile>

            <CardProfile className="mt-6">
                <div className="font-medium text-[15px] text-muted-foreground">
                    <InfoProfile title="email" name="dkdkfd@gmail.com"></InfoProfile>
                    <Separator className="my-4" />
                    <InfoProfile title="phone" name="2904938943"></InfoProfile>
                    <Separator className="my-4" />
                    <InfoProfile title="address" name="123 Main St, City, Country"></InfoProfile>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                        <InfoProfile title="password" name={maskString("Cloly281119@.")}></InfoProfile>
                        <DialogChangePassword></DialogChangePassword>
                    </div>
                </div>
            </CardProfile>
        </div>
    );
}

export default UpdateProfile;