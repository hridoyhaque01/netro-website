import { motion } from "framer-motion";
import Image from "next/image";

function FeatureCardOne({ index, item, length }) {
    const svgVariants = {
        hidden: { pathLength: 0 },
        visible: (i) => ({
            pathLength: 1,
            transition: {
                delay: i * 0.6,
                duration: 1.5,
            },
        }),
    };

    const renderSvgContent = () => {
        const isOdd = index % 2 === 0;
        if (length == index + 1) {
            return;
        }

        if (isOdd) {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="326"
                    height="143"
                    viewBox="0 0 326 143"
                    fill="none"
                    className="translate-y-1/2"
                >
                    <motion.path
                        d="M0.333008 1.74536L300.33 3.17052C313.584 3.23349 324.278 14.0296 324.215 27.2843L323.667 142.767"
                        stroke="#D1D1D1"
                        strokeWidth="2"
                        variants={svgVariants}
                        custom={index}
                    />
                </svg>
            );
        } else {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="325"
                    height="143"
                    viewBox="0 0 325 143"
                    fill="none"
                    className="translate-y-1/2 order-1"
                >
                    <motion.path
                        d="M324.996 1L24.9995 2.42516C11.7448 2.48813 1.0508 13.2842 1.11377 26.5389L1.66238 142.022"
                        stroke="#D1D1D1"
                        strokeWidth="2"
                        variants={svgVariants}
                        custom={index}
                    />
                </svg>
            );
        }
    };
    return (
        <div
            className={`flex max-w-max relative ${index % 2 != 0 && "ml-auto"}`}
        >
            <div
                className={`flex rounded-3xl max-w-max overflow-hidden ${
                    index % 2 != 0 && "order-2"
                }`}
                custom={index}
                style={{ border: `2px solid ${item?.color}` }}
            >
                <div className="p-10 bg-black-900 flex items-center justify-center">
                    <div className="w-[60px] aspect-square rounded-full bg-black-550 flex items-center justify-center">
                        <Image
                            src={item.icon}
                            width={32}
                            height={32}
                            alt="feature icon"
                            className="w-8 aspect-square object-contain"
                        />
                    </div>
                </div>
                <div
                    className={`px-8 py-12`}
                    style={{ background: item?.color }}
                >
                    <h4
                        className={`text-4xl font-bold ${
                            item?.textDark ? "text-black-900" : "text-white"
                        }`}
                    >
                        {item?.title}
                    </h4>
                    <p
                        className={`text-lg ${
                            item?.textDark ? "text-black-700" : "text-main-100"
                        }`}
                    >
                        {item?.description}
                    </p>
                </div>
            </div>
            {renderSvgContent()}
        </div>
    );
}

export default FeatureCardOne;
