import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CompaniesSection from "../components/landingPage/CompaniesSection";
import HeroImage from "../components/landingPage/HeroImage";
import HowItWorks from "../components/landingPage/HowItWorks";
import OurClients from "../components/landingPage/OurClients";
import OurWorksSection from "../components/landingPage/OurWorksSection";
import PricingPlans from "../components/landingPage/PricingPlans";
import WebSolutionsSection from "../components/landingPage/WebSolutions";
import WhyUsSection from "../components/landingPage/WhyUsSection";

function LandingPage() {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <CompaniesSection />

            <HowItWorks />
            <WebSolutionsSection />
            <WhyUsSection />
            <OurWorksSection />
            <PricingPlans />
            <OurClients />
            <Footer />
        </div>
    )
}

export default LandingPage;