import BlogOne from "@/components/blogs/BlogOne";
import CompanyOne from "@/components/companies/CompanyOne";
import ContactOne from "@/components/contact/ContactOne";
import FaqOne from "@/components/faq/FaqOne";
import HeroOne from "@/components/hero/HeroOne";
import PricingOne from "@/components/pricing/PricingOne";
import ServiceOne from "@/components/services/ServiceOne";
import TeamOne from "@/components/teams/TeamOne";
import TestimonialOne from "@/components/testimonials/TestimonialOne";
import VideoOne from "@/components/videos/VideoOne";
import WorkOne from "@/components/works/WorkOne";

function App() {
    return (
        <main>
            <HeroOne />
            <CompanyOne />
            <ServiceOne />
            <TeamOne />
            <VideoOne />
            <WorkOne />
            <TestimonialOne />
            <BlogOne />
            <PricingOne />
            <FaqOne />
            <ContactOne />
        </main>
    );
}

export default App;
