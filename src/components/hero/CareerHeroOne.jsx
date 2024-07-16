import { images } from "@/lib/images";
import Image from "next/image";

import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { motion } from "framer-motion";
function CareerHeroOne() {
    return (
        <section className="px-6 pt-[4.5rem] pb-10">
            <div className="containerX">
                <div>
                    <motion.h4
                        variants={animatedItem({ y: 6 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-xl text-black-700"
                    >
                        join to the loved team
                    </motion.h4>
                    <motion.h1
                        variants={animatedItem({ blur: 10, duration: 0.3 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-7xl text-black-900 font-bold leading-[120%]"
                    >
                        Uplift your career <br /> to next level
                    </motion.h1>
                </div>
                <div className="pt-24 flex items-center gap-6">
                    <div className="flex flex-col gap-6 flex-1">
                        <motion.h4
                            variants={animatedItem({
                                blur: 10,
                                duration: 0.4,
                                delay: 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-5xl font-bold leading-[120%] text-black-900"
                        >
                            Why join us
                        </motion.h4>
                        <motion.ul
                            variants={staggerList({
                                delay: 0.1,
                                duration: 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-1 list-disc list-inside"
                        >
                            <motion.li
                                variants={staggerItem({ y: 10 })}
                                className="text-xl text-black-600"
                            >
                                Create. Collaborate. Innovate.
                            </motion.li>
                            <motion.li
                                variants={staggerItem({ y: 10 })}
                                className="text-xl text-black-600"
                            >
                                Grow your career with support and resources.
                            </motion.li>
                            <motion.li
                                variants={staggerItem({ y: 10 })}
                                className="text-xl text-black-600"
                            >
                                Enjoy flexibility and a positive culture.
                            </motion.li>
                            <motion.li
                                variants={staggerItem({ y: 10 })}
                                className="text-xl text-black-600"
                            >
                                Make a difference on impactful projects.
                            </motion.li>
                            <motion.li
                                variants={staggerItem({ y: 10 })}
                                className="text-xl text-black-600"
                            >
                                Get rewarded for your contributions
                            </motion.li>
                        </motion.ul>
                    </div>
                    <motion.div
                        variants={animatedItem({ scale: 0.9, delay: 0.4 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full max-w-[522px]"
                    >
                        <Image
                            src={images.portfolio2}
                            width={522}
                            height={230}
                            alt="Career Hero"
                            className="w-full max-h-[230px] object-cover bg-center rounded-3xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CareerHeroOne;
