import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { productCouters } from "@/lib/data";
import { images } from "@/lib/images";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import NumberTicker from "../magicui/number-ticker";

function PortofolioCounters() {
    return (
        <section
            className="py-[4.5rem] px-6"
            style={{
                background: `url(${images.dots}) center / cover no-repeat`,
            }}
        >
            <div className="containerX">
                <div className="flex items-end justify-between mb-[3.75rem]">
                    <motion.h2
                        variants={animatedItem({ blur: 10 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="title"
                    >
                        How we created <br /> impact on this product
                    </motion.h2>
                    <motion.a
                        variants={animatedItem({ scale: 0.94 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        href="#"
                        className="flex max-w-max items-center gap-2 bg-blue-500 font-bold  py-5 pl-6 pr-4 rounded-full text-white"
                    >
                        Expert Consultation
                        <ArrowAngle fill="#fff" />
                    </motion.a>
                </div>

                <motion.div
                    variants={staggerList({ delay: 0.1, duration: 0.1 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex-1 grid grid-cols-4 gap-10 relative z-40"
                >
                    {productCouters.map((counter) => (
                        <motion.div
                            variants={staggerItem({ y: 15 })}
                            className="w-full text-center rounded-2xl flex flex-col gap-2"
                            key={counter.id}
                        >
                            <h2 className="text-8xl font-extrabold">
                                <NumberTicker
                                    value={counter.count}
                                    direction="up"
                                />

                                {counter.suffix}
                            </h2>
                            <p className="text-2xl text-black-600">
                                {counter.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default PortofolioCounters;
