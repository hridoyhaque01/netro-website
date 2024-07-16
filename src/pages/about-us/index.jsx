import AboutGalleryContent from "@/components/about/AboutGalleryContent";
import ContactOne from "@/components/contact/ContactOne";
import CounterOne from "@/components/counters/CounterOne";
import FeatureOne from "@/components/features/FeatureOne";
import AboutHeroOne from "@/components/hero/AboutHeroOne";
import VideoTwo from "@/components/videos/VideoTwo";

function AboutUs() {
    return (
        <main>
            <AboutHeroOne />
            <AboutGalleryContent />
            <CounterOne />
            <VideoTwo />
            <FeatureOne />
            <ContactOne />
        </main>
    );
}

export default AboutUs;
