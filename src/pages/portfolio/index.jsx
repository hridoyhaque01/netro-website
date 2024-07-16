import ContactOne from "@/components/contact/ContactOne";
import PortfolioHeroOne from "@/components/hero/PortfolioHeroOne";
import PortfolioGalleryOne from "@/components/portfolios/PortfolioGalleryOne";
import { useState } from "react";

function Portfolio() {
    const [category, setCategory] = useState("all");
    return (
        <main>
            <PortfolioHeroOne category={category} setter={setCategory} />
            <PortfolioGalleryOne category={category} />
            <ContactOne className="pt-12 pb-12" />
        </main>
    );
}

export default Portfolio;
