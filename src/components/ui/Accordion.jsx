import { animatedItem, staggerItem } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Accordion({
    wrapper = "",
    header = "",
    base = "",
    texts = "",
    titleKey = "",
    textKey = "",
    showIcon = true,
    items = [],
}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return items?.map((item, index) => (
        <motion.div
            variants={animatedItem({ x: 15, delay: 0.1 * index })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            className={`${wrapper}`}
        >
            <button
                type="button"
                className={`${header}`}
                onClick={() => handleItemClick(index)}
            >
                {item[titleKey]}

                {showIcon && (
                    <div className="w-10 h-10 flex items-center justify-center border border-black-900 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            className={`${
                                activeIndex === index
                                    ? "rotate-180"
                                    : "rotate-0"
                            } duration-300`}
                        >
                            <path
                                d="M8.16602 11.6667L13.9993 16.3334L19.8327 11.6667"
                                stroke="#1C1C1C"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                )}
            </button>
            <AnimatePresence initial={false}>
                {activeIndex === index && (
                    <motion.div
                        variants={animatedItem({ height: 0 })}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="overflow-hidden"
                    >
                        <div className={base}>
                            <p className={texts}>{item[textKey]}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    ));
}

export default Accordion;
