import { animatedItem } from "@/lib/animations";
import { pricingList } from "@/lib/data";
import { motion } from "framer-motion";

function PricingOne() {
    return (
        <section className="px-6 pb-16">
            <div className="container2X bg-black-900 p-[60px] rounded-[32px]">
                <motion.h4
                    className="tag max-w-max"
                    variants={animatedItem({ y: 5 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    transparent fees
                </motion.h4>
                <motion.h5
                    variants={animatedItem({ delay: 0.2, blur: 6 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title text-white mt-6"
                >
                    Estimated Pricing
                </motion.h5>

                <div className="mt-[60px]">
                    <div className="grid grid-cols-3 gap-6">
                        {pricingList.map((item, index) => (
                            <motion.div
                                variants={animatedItem({
                                    y: 30,
                                    delay: 0.2 * index,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                key={item?.id}
                                className="text-white flex items-center justify-center"
                            >
                                <div
                                    className={`p-6 rounded-3xl bg-black-500 shadow-box w-full ${
                                        index == 1
                                            ? "border-2 border-yellow-400"
                                            : ""
                                    }`}
                                >
                                    <div className="pb-4 border-b border-black-400">
                                        <h3 className="text-4xl font-bold ">
                                            {item?.title}
                                        </h3>
                                        <p className="text-neutral-200 text-sm mt-1">
                                            {item?.description}
                                        </p>
                                        <div className="mt-4">
                                            <span className="text-5xl font-bold">
                                                ${item?.price}
                                            </span>{" "}
                                            <span className="text-neutral-200 text-sm">
                                                / per hour
                                            </span>
                                        </div>
                                    </div>
                                    {/* Features */}
                                    <div className="pt-4">
                                        <h4 className="text-lg font-bold mb-4">
                                            Features
                                        </h4>
                                        <ul className="flex flex-col gap-4">
                                            {item?.features?.map(
                                                (feature, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-center gap-2 text-base"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                        >
                                                            <path
                                                                opacity="0.4"
                                                                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                                                                fill="#2CC672"
                                                            />
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                                                                fill="#2CC672"
                                                            />
                                                        </svg>
                                                        <span>{feature}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingOne;
