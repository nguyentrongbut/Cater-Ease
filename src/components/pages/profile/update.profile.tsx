import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import CardProfile from "@/components/pages/profile/card.profile";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";
import InfoProfile from "@/components/pages/profile/info.profile";
import DialogUpdateProfile from "@/components/pages/profile/dialog.update.profile";
import DialogChangePassword from "@/components/pages/profile/dialog.change.password";
import maskString from "@/utils/mask.string";
import {TUserInfo} from "@/types";

const UpdateProfile = ({infoProfile}: { infoProfile: TUserInfo }) => {
    return (
        <div>
            <CardProfile>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <Avatar className="size-14 md:size-16 cursor-default">
                            <AvatarImage src="kdd" alt="@shadcn"/>
                            <AvatarFallback>
                                <Image
                                    src={infoProfile?.avatar || "/default-avatar.png"}
                                    alt="@shadcn"
                                    width={80}
                                    height={80}
                                    objectFit="cover"
                                ></Image>
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-md font-bold">{infoProfile?.name}</h1>
                            <div className="text-[15px] text-muted-foreground flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                                <span>CEID: <span className="text-sm text-darkGray dark:text-white ml-2 md:ml-4">{infoProfile?.id}</span></span>
                                <span className="flex items-center">Status:
                                <Badge variant="active" className="ml-2 md:ml-4">{infoProfile?.status || "Active"}</Badge>
                                </span>
                            </div>
                        </div>
                    </div>
                    <DialogUpdateProfile infoProfile={infoProfile}></DialogUpdateProfile>
                </div>
            </CardProfile>

            <CardProfile className="mt-6">
                <div className="font-medium text-[15px] text-muted-foreground">
                    <InfoProfile title="email" name={infoProfile?.email}></InfoProfile>
                    <Separator className="my-4" />
                    <InfoProfile title="phone" name={infoProfile?.phone}></InfoProfile>
                    <Separator className="my-4" />
                    <InfoProfile title="address" name={infoProfile?.address}></InfoProfile>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                        <InfoProfile title="password" name={maskString(infoProfile?.password)}></InfoProfile>
                        <DialogChangePassword infoProfile={infoProfile}></DialogChangePassword>
                    </div>
                </div>
            </CardProfile>
        </div>
    );
}

export default UpdateProfile;