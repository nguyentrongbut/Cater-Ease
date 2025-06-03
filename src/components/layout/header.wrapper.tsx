import React from "react";

const HeaderWrapper = ({children}: { children: React.ReactNode }) => {
    return (
        <header className="sticky top-0 z-50">
            {children}
        </header>
    )
}
export default HeaderWrapper;