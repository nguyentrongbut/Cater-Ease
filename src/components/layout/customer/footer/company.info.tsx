import Logo from "@/components/common/logo";

const CompanyInfo = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Logo></Logo>
            </div>
            <p className="text-sm">Premium catering booking platform connecting customers with the best caterers.</p>
        </div>
    )
}

export default CompanyInfo;