import { animatedItem } from "@/lib/animations";
import { motion } from "framer-motion";
function AboutHeroOne() {
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
                            className="text-xl text-black-700"
                        >
                            journey and stories
                        </motion.h4>
                        <motion.h1
                            variants={animatedItem({
                                blur: 10,
                                delay: 0.1,
                                duration: 0.3,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-7xl text-black-900 font-bold leading-[120%]"
                        >
                            About us
                        </motion.h1>
                    </div>
                    <motion.p
                        variants={animatedItem({
                            blur: 6,
                            delay: 0.3,
                            duration: 0.3,
                        })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl font-medium text-black-900 leading-[120%] text-right"
                    >
                        We transform your ideas <br /> into stunning visuals.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

export default AboutHeroOne;
