import SearchBar from "@/components/pages/home/search.bar";
import QuickStats from "@/components/pages/home/quick.stats";
import SectionWrapper from "@/components/common/section.wrapper";
import FeaturedEventMenu from "@/components/pages/home/featured.event.menu";

export default function Home() {
    return (
        <>
            {/* banner and search */}
            <SectionWrapper className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary font-title dark:text-white">Premium Catering for Every Occasion</h1>
                        <p className="text-xl mb-8 opacity-90 font-title">
                            Discover exceptional caterers, browse menus, and book your perfect event catering with ease.
                        </p>
                        <SearchBar></SearchBar>
                    </div>
                </div>
            </SectionWrapper>
            {/* end banner and search */}

            <QuickStats></QuickStats>

            <FeaturedEventMenu></FeaturedEventMenu>
        </>
    );
}
