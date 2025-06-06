'use client'
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Logo from "@/components/common/logo";
import {LinkSheet} from "@/components/link";
import {Separator} from "@/components/ui/separator";
import React from "react";
import useUserInfo from "@/hook/useUserInfo";
import logout from "@/lib/logout";

const MobileMenu = () => {
    const userInfo = useUserInfo()

    // logout
    const handleLogout = () => {
        logout()
    }

    return (
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
                {userInfo ? (
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

                       <div onClick={handleLogout}>
                           <LinkSheet>
                               Logout
                           </LinkSheet>
                       </div>
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
    )
}

export default MobileMenu