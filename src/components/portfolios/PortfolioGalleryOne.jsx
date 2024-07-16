import usePortfolioFunctions from "@/hooks/usePortfolioFunctions";
import { portfolioList } from "@/lib/data";
function PortfolioGalleryOne({ className, category = "all" }) {
    const { rederPortfolioContent } = usePortfolioFunctions();
    const newData = portfolioList?.filter((item) => {
        if (category?.toLowerCase() === "all") {
            return item;
        } else {
            return item?.category?.toLowerCase() === category?.toLowerCase();
        }
    });
    const isMoreThenFour = newData?.length > 4;

    return (
        <section className={`bg-white py-6 pb-20 px-6 ${className}`}>
            <div className="containerX">
                {newData?.length > 0 ? (
                    <div
                        key={category}
                        className="grid grid-cols-2 gap-6 auto-rows-min"
                    >
                        {newData?.map((item, index) => {
                            return rederPortfolioContent(
                                index,
                                item,
                                isMoreThenFour,
                                newData?.length
                            );
                        })}
                    </div>
                ) : (
                    <div className="pt-10">
                        <h4 className="text-center text-4xl font-semibold">
                            No work available
                        </h4>
                    </div>
                )}
            </div>
        </section>
    );
}

export default PortfolioGalleryOne;
