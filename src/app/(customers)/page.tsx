import SearchBar from "@/components/pages/home/search.bar";
import QuickStats from "@/components/pages/home/quick.stats";
import SectionWrapper from "@/components/common/section.wrapper";
import FeaturedEventDishes from "@/components/pages/home/featured.event.dishes";
import ContainerWrapper from "@/components/common/container.wrapper";
import HowItWorks from "@/components/pages/home/how.it.works";
import StartPlanning from "@/components/pages/home/start.planning";

export default function Home() {
    return (
        <>
            {/* banner and search */}
            <SectionWrapper className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
                <ContainerWrapper>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary font-title dark:text-white">Premium Catering for Every Occasion</h1>
                        <p className="text-xl mb-8 opacity-90 font-title">
                            Enjoy expertly crafted menus and seamless booking — brought to you by our trusted catering partner.
                        </p>
                        <SearchBar></SearchBar>
                    </div>
                </ContainerWrapper>
            </SectionWrapper>
            {/* end banner and search */}

            <QuickStats></QuickStats>

            <FeaturedEventDishes></FeaturedEventDishes>

            <HowItWorks></HowItWorks>

            <StartPlanning></StartPlanning>
        </>
    );
}
