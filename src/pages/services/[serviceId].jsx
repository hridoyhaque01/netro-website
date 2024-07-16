import ContactOne from "@/components/contact/ContactOne";
import FaqOne from "@/components/faq/FaqOne";
import ServiceDetailsHero from "@/components/hero/ServiceDetailsHero";
import ServiceGallery from "@/components/services/ServiceGallery";
import ServiceSchedule from "@/components/services/ServiceSchedule";
import SeviceDetailsContent from "@/components/services/SeviceDetailsContent";
import ClientFeedback from "@/components/testimonials/ClientFeedback";
import { services } from "@/lib/data";

function ServiceDetails({ service }) {
    return (
        <main className="">
            <ServiceDetailsHero service={service} />
            <SeviceDetailsContent service={service} />
            <ServiceGallery />
            <ServiceSchedule />
            <ClientFeedback />
            <FaqOne />
            <ContactOne />
        </main>
    );
}

export default ServiceDetails;

export const getServerSideProps = async ({ params }) => {
    const { serviceId } = params || {};
    const service = services.find((item) => item.id == serviceId);

    if (!service) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            service: service,
        },
    };
};
