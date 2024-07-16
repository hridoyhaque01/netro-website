import ContactCard from "@/components/contact/ContactCard";
import PortfolioItem from "@/components/portfolios/PortfolioItem";
import { Fragment } from "react";
function usePortfolioFunctions() {
    const rederPortfolioContent = (
        index = 0,
        item = {},
        isMoreThenFour = false,
        length = 0
    ) => {
        const isEven = index % 2 === 0;
        if (isMoreThenFour && index == 4) {
            return (
                <Fragment key={item?.id}>
                    <div className="col-span-2">
                        <ContactCard />
                    </div>
                    <PortfolioItem isEven={isEven} item={item} index={index} />
                </Fragment>
            );
        } else if (!isMoreThenFour && index + 1 == length) {
            return (
                <Fragment key={item?.id}>
                    <PortfolioItem isEven={isEven} item={item} index={index} />
                    <div className="col-span-2">
                        <ContactCard />
                    </div>
                </Fragment>
            );
        } else {
            return (
                <PortfolioItem
                    isEven={isEven}
                    key={item?.id}
                    item={item}
                    index={index}
                />
            );
        }
    };
    return {
        rederPortfolioContent,
    };
}

export default usePortfolioFunctions;
