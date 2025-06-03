import React from "react";

const HeadingFooter = ({children}: { children: React.ReactNode }) => {
    return (
        <h4 className="font-semibold text-lg mb-4">
            {children}
        </h4>
    )
}

export default HeadingFooter