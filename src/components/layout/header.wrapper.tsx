import React from "react";

const HeaderWrapper = ({children}: { children: React.ReactNode }) => {
    return (
        <header>
            {children}
        </header>
    )
}
export default HeaderWrapper;