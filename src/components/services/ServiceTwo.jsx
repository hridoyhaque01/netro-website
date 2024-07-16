import { animatedItem, staggerList } from "@/lib/animations";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { ServiceHeaderCard } from "./ServiceHeaderCard";

function ServiceTwo() {
    return (
        <section className="px-6 py-[3.75rem]">
            <div className="containerX">
                <div className="flex items-end justify-between">
                    <div>
                        <motion.h4
                            variants={animatedItem({ y: 5 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-xl text-black-700"
                        >
                            We are best at
                        </motion.h4>
                        <motion.h1
                            variants={animatedItem({ delay: 0.2, blur: 6 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-7xl text-black-900 font-bold leading-[120%]"
                        >
                            Services
                        </motion.h1>
                    </div>
                    <motion.p
                        variants={animatedItem({ delay: 0.4, blur: 6 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl font-medium text-black-900 leading-[120%] text-right"
                    >
                        We TRANSFORM <br /> YOUR product into life
                    </motion.p>
                </div>

                <div className="mt-16">
                    <motion.div
                        variants={staggerList({ duration: 0.3, delay: 0.1 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden"
                    >
                        {services?.map((item, index) => (
                            <ServiceHeaderCard key={item?.id} item={item} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ServiceTwo;
