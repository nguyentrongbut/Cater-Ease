import React from "react";
import {ModeToggle} from "@/components/common/mode.toggle";
import Logo from "@/components/common/logo";
import CtaAction from "@/components/layout/customer/header/cta.action";
import MobileMenu from "@/components/layout/customer/header/mobile.menu";

const HeaderCustomer = () => {
    return (
        <nav className="border-b dark:border-gray-700 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Logo></Logo>

                    {/* desktop actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <CtaAction></CtaAction>
                        {/* dark mode */}
                        <ModeToggle></ModeToggle>
                        {/* end dark mode */}
                    </div>
                    {/* end desktop actions*/}
                    <div className="flex gap-2 md:hidden">
                        <MobileMenu></MobileMenu>
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