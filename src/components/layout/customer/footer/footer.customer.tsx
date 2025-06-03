import FooterWrapper from "@/components/layout/footer.wrapper";
import SocialLinks from "@/components/common/social.links";
import ContactInfo from "@/components/layout/customer/footer/contact.info";
import QuickLinks from "@/components/layout/customer/footer/quick.links";
import CompanyInfo from "@/components/layout/customer/footer/company.info";
import NewLetter from "@/components/layout/customer/footer/new.letter";
import FooterBottom from "@/components/layout/customer/footer/footer.bottom";

const FooterCustomer = () => {
    return (
        <FooterWrapper>
            <div className="border-t dark:border-gray-700">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <CompanyInfo></CompanyInfo>
                        <QuickLinks></QuickLinks>
                        <ContactInfo></ContactInfo>
                        <div>
                            <NewLetter></NewLetter>
                            <div className="mt-6">
                                <SocialLinks></SocialLinks>
                            </div>
                        </div>
                    </div>
                    <FooterBottom></FooterBottom>
                </div>
            </div>

        </FooterWrapper>
    )
}

export default FooterCustomer