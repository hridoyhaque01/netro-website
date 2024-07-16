import ContactOne from "@/components/contact/ContactOne";
import PortofolioCounters from "@/components/counters/PortofolioCounters";
import PortfolioDetailsHero from "@/components/hero/PortfolioDetailsHero";
import PortfolioDetailsContent from "@/components/portfolios/PortfolioDetailsContent";
import PortfolioSchedule from "@/components/portfolios/PortfolioSchedule";
import PortofolioGallery from "@/components/portfolios/PortofolioGallery";
import Strategy from "@/components/portfolios/Strategy";
import RelatedPortfolios from "@/components/resentPost/RelatedPortfolios";
import ClientFeedback from "@/components/testimonials/ClientFeedback";
import { portfolioList } from "@/lib/data";

function PortfolioDetails({ data }) {
    return (
        <main>
            <PortfolioDetailsHero data={data} />
            <PortfolioDetailsContent data={data} />
            <PortfolioSchedule />
            <Strategy />
            <PortofolioGallery />
            <PortofolioCounters />
            <ClientFeedback />
            <RelatedPortfolios />
            <ContactOne />
        </main>
    );
}

export default PortfolioDetails;

export const getServerSideProps = async ({ params }) => {
    const { portofilioId } = params || {};
    const data = portfolioList?.find((item) => item.id == portofilioId);

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data: data,
        },
    };
};
