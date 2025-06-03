import React from "react";
import HeaderCustomer from "@/components/layout/customer/header/header.customer";
import FooterCustomer from "@/components/layout/customer/footer/footer.customer";

const CustomersLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <main className="flex flex-col min-h-screen">
            <HeaderCustomer></HeaderCustomer>
            <main className="flex-1">
                {children}
            </main>
            <FooterCustomer></FooterCustomer>
        </main>
    );
}

export default CustomersLayout;