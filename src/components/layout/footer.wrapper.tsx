import React from "react";

const FooterWrapper = ({children}:{children: React.ReactNode}) => {
    return (
        <footer>
            {children}
        </footer>
    )
}

export default FooterWrapper