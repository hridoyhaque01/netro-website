import { animatedItem } from "@/lib/animations";
import { motion } from "framer-motion";
function TeamHero() {
    return (
        <section className="px-6 pt-[4.5rem] pb-10">
            <div className="containerX">
                <div className="flex items-end justify-between">
                    <div>
                        <motion.h4
                            variants={animatedItem({ blur: 10 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-xl text-black-700 uppercase"
                        >
                            Our team
                        </motion.h4>
                        <motion.h1
                            variants={animatedItem({ blur: 10, delay: 0.1 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-7xl text-black-900 font-bold leading-[120%]"
                        >
                            Meet the experts
                        </motion.h1>
                    </div>
                    <motion.p
                        variants={animatedItem({ blur: 10, delay: 0.2 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl font-medium text-black-900 leading-[120%] text-right"
                    >
                        Visionaries behind
                        <br />
                        our designs
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

export default TeamHero;
