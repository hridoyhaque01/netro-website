import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { portfolioCategories } from "@/lib/data";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import { Fragment } from "react";

function PortfolioHeroOne({ setter = () => {}, category = "all" }) {
    return (
        <section className="px-6 pt-[4.5rem] pb-10">
            <div className="containerX">
                <div className="flex items-end justify-between">
                    <div>
                        <motion.h4
                            variants={animatedItem({ y: 5 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-xl text-black-700 uppercase"
                        >
                            Our Portfolio
                        </motion.h4>
                        <motion.h1
                            variants={animatedItem({ delay: 0.2, blur: 6 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-7xl max-w-max relative text-black-900 font-bold leading-[120%]"
                        >
                            Brilliant works
                            <ArrowAngle
                                fill="#222222"
                                className="absolute top-4 -right-8"
                            />
                        </motion.h1>
                    </div>
                    <motion.ul
                        variants={staggerList({ duration: 0.2, delay: 0.2 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center"
                    >
                        {portfolioCategories?.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <motion.li
                                        variants={staggerItem({ scale: 0.92 })}
                                        className={`px-4 py-2.5 rounded-full duration-300 ${
                                            category?.toLowerCase() ===
                                            item?.name?.toLowerCase()
                                                ? "bg-blue-500 text-white font-semibold"
                                                : "bg-neutral-200"
                                        }`}
                                        onClick={() => setter(item?.name)}
                                    >
                                        {item?.name}
                                    </motion.li>

                                    {index !==
                                        portfolioCategories?.length - 1 && (
                                        <motion.li
                                            variants={staggerItem({
                                                width: 0,
                                                setWidth: "20px",
                                                setHeight: "2px",
                                            })}
                                            className="w-5 h-0.5 bg-neutral-200"
                                        ></motion.li>
                                    )}
                                </Fragment>
                            );
                        })}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}

export default PortfolioHeroOne;
