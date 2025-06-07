'use client'
import {ButtonBadge} from "@/components/button";
import {Heart, LogOut, MessageCircle, ShoppingCart, User} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import {LinkIcon} from "@/components/link";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";
import useUserInfo from "@/hook/useUserInfo";
import logout from "@/lib/logout";
import {logoutServer} from "@/lib/actions/auth";
import toast from "react-hot-toast";

const CtaAction = () => {
    const userInfo = useUserInfo()

    // logout
    const handleLogout = async () => {
        const result = await logoutServer();
        if (!result) return toast.error('Logout failed. Please try again!');
        logout()
    }
    return (
        <>
            {userInfo ? (
                <>
                    <ButtonBadge
                        href="/favorites"
                        icon={
                            <Heart className="h-5 w-5"/>
                        }
                    ></ButtonBadge>

                    <ButtonBadge
                        href="/cart"
                        icon={
                            <ShoppingCart className="h-5 w-5"/>
                        }
                    ></ButtonBadge>

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
                                        src="/default-avatar.png"
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
                                    Hello {userInfo?.name} !
                                </b>
                            </p>
                            <DropdownMenuItem>
                                <LinkIcon
                                    href="/profile"
                                    icon={<User></User>}
                                >
                                    Profile
                                </LinkIcon>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>
                                <LinkIcon
                                    icon={<LogOut/>}
                                >
                                    Logout
                                </LinkIcon>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </>
            ) : (
                <>
                    <ButtonBadge
                        href="/cart"
                        icon={
                            <ShoppingCart className="h-5 w-5"/>
                        }
                    ></ButtonBadge>
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