import { animatedItem } from "@/lib/animations";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

function ServiceOne() {
    return (
        <section className="py-12 px-6 bg-white">
            <div className="containerX">
                <motion.h4
                    className="tag max-w-max"
                    variants={animatedItem({ y: 5 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    we are best at
                </motion.h4>
                <motion.h5
                    variants={animatedItem({ delay: 0.1, blur: 6 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title text-black-900 mt-6"
                >
                    Services
                </motion.h5>
                <motion.div className="grid grid-cols-3 gap-6 mt-16">
                    {services?.map((item, index) => (
                        <motion.div
                            variants={animatedItem({
                                y: 30,
                                delay: index * 0.1,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={item?.id}
                            className="py-7 px-8 rounded-3xl bg-black-900"
                        >
                            <div className="w-20 aspect-square flex items-center justify-center rounded-full bg-black-500">
                                <Image
                                    src={item?.img}
                                    alt={item?.title}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>

                            <h2
                                className="text-4xl font-bold text-white mt-6 mb-4"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                            <p className="text-neutral-200 text-lg">
                                {item?.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceOne;
