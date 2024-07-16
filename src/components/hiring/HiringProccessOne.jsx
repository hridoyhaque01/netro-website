import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { hiringProccess } from "@/lib/data";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";

function HiringProccessOne() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="containerX">
                <motion.h4
                    variants={animatedItem({ y: 10 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tag max-w-max"
                >
                    hiring process
                </motion.h4>
                <motion.h5
                    variants={animatedItem({ blur: 10, delay: 0.1 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title mt-6"
                >
                    How we onboard people
                </motion.h5>
                <div className="pt-16 flex items-center gap-10">
                    <motion.div
                        variants={animatedItem({ scale: 0.9, delay: 0.2 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full max-w-[522px]"
                    >
                        <Image
                            src={images.portfolio2}
                            width={522}
                            height={355}
                            alt="Hiring Proccess"
                            className="w-full max-h-[355px] object-cover bg-center rounded-3xl"
                        />
                    </motion.div>
                    <div className="flex-1">
                        <motion.ul
                            variants={staggerList({
                                delay: 0.1,
                                duration: 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-4"
                        >
                            {hiringProccess?.map((item, index) => (
                                <motion.li
                                    variants={staggerItem({ x: 10 })}
                                    className="text-xl text-black-900 px-6 py-4 rounded-xl border border-neutral-700"
                                    key={index}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HiringProccessOne;
