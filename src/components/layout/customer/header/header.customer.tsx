import * as React from "react";
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {Menu, Heart, ShoppingCart, MessageCircle, User, LogOut} from "lucide-react"
import {ModeToggle} from "@/components/common/mode.toggle";
import Logo from "@/components/common/logo";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {ButtonBadge} from "@/components/button";
import {LinkIcon, LinkSheet} from "@/components/link";

const HeaderCustomer = () => {
    const isLoggedIn: boolean = false;
    return (
        <nav className="border-b dark:border-gray-700 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Logo></Logo>

                    {/* desktop actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isLoggedIn ? (
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
                                            <b className="line-clamp-1">
                                                Hello User !
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
                                        <DropdownMenuItem>
                                            <LinkIcon
                                                href="/logout"
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
                        {/* dark mode */}
                        <ModeToggle></ModeToggle>
                        {/* end dark mode */}
                    </div>
                    {/* end desktop actions*/}
                    <div className="flex gap-2 md:hidden">
                        {/* mobile menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-56">
                                <SheetTitle className="mt-4">
                                    <Logo></Logo>
                                </SheetTitle>
                                {isLoggedIn ? (
                                    <nav
                                        className="flex flex-col space-y-3 mt-6 mx-4 text-sm text-gray-500 dark:text-gray-300">
                                        <LinkSheet
                                            href="/"
                                            number={3}
                                        >
                                            Favorites
                                        </LinkSheet>

                                        <LinkSheet
                                            href="/cart"
                                        >
                                            Cart
                                        </LinkSheet>

                                        <LinkSheet
                                            href="/messages"
                                        >
                                            Messages
                                        </LinkSheet>

                                        <Separator/>

                                        <LinkSheet
                                            href="/profile"
                                        >
                                            Profile
                                        </LinkSheet>

                                        <LinkSheet
                                            href="/logout"
                                        >
                                            Logout
                                        </LinkSheet>
                                    </nav>
                                ) : (
                                    <nav className="flex flex-col space-y-3 mt-6 ml-4 text-sm text-gray-500 dark:text-gray-300">
                                        <LinkSheet
                                            href="/cart"
                                            number={3}
                                        >
                                            Cart
                                        </LinkSheet>

                                        <LinkSheet
                                            href="/login"
                                        >
                                            Login
                                        </LinkSheet>

                                        <LinkSheet
                                            href="/sign-up"
                                        >
                                            Sign Up
                                        </LinkSheet>
                                    </nav>
                                )}
                            </SheetContent>
                        </Sheet>
                        {/* end mobile menu*/}

                        {/* dark mode */}
                        <ModeToggle></ModeToggle>
                        {/* end dark mode */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderCustomer;