import {ButtonBadge} from "@/components/button";
import {Heart, LogOut, MessageCircle, User} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import {LinkIcon} from "@/components/link";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {logoutServer} from "@/lib/actions/auth";
import {getProfile} from "@/lib/actions/account";
import {redirect} from "next/navigation";
import BtnCart from "@/components/layout/customer/header/btn.cart";

const CtaAction = async () => {
    const infoProfile = await getProfile();

    // logout
    const handleLogout = async () => {
        'use server'
        const result = await logoutServer();
        if (result) {
            redirect('/');
        }
    }
    return (
        <>
            {infoProfile ? (
                <>
                    <ButtonBadge
                        href="/favorites"
                        icon={
                            <Heart className="h-5 w-5"/>
                        }
                    ></ButtonBadge>

                    <BtnCart/>

                    <ButtonBadge
                        href="/messages"
                        icon={
                            <MessageCircle className="h-5 w-5"/>
                        }
                    ></ButtonBadge>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage src="kdd" alt="@shadcn"/>
                                <AvatarFallback>
                                    <Image
                                        src={infoProfile?.avatar || "/default-avatar.png"}
                                        alt="@shadcn"
                                        width={40}
                                        height={40}
                                        objectFit="cover"
                                    ></Image>
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" sideOffset={10}>
                            <p className="text-sm font-bold py-1.5 px-2 my-1 max-w-[123px]">
                                <b className="line-clamp-1 capitalize">
                                    Hello {infoProfile?.name} !
                                </b>
                            </p>
                            <DropdownMenuItem asChild>
                                <LinkIcon
                                    href="/profile"
                                    icon={<User></User>}
                                >
                                    Profile
                                </LinkIcon>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <form action={handleLogout}>
                                    <button type="submit">
                                        <LinkIcon
                                            icon={<LogOut/>}
                                        >
                                            Logout
                                        </LinkIcon>
                                    </button>
                                </form>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </>
            ) : (
                <>
                    <BtnCart/>
                    <Link href="/login" scroll={false}>
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href="/sign-up" scroll={false}>
                        <Button>Sign Up</Button>
                    </Link>
                </>
            )}
        </>
    )
}

export default CtaAction;