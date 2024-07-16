import { animatedItem } from "@/lib/animations";
import { serviceGalleries } from "@/lib/data";
import { motion } from "framer-motion";

function ServiceGallery() {
    const getCols = (index) => {
        return index == 2 || index == 3 ? "col-span-2" : "";
    };
    return (
        <section className="py-[4.5rem] px-6 bg-black-900">
            <div className="containerX">
                <motion.h2
                    variants={animatedItem({ blur: 10 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title text-white"
                >
                    Some prime previews from <br /> our memory lane
                </motion.h2>
                <motion.div className="grid grid-cols-4 gap-6 mt-[3.75rem]">
                    {serviceGalleries?.map((item, index) => (
                        <motion.div
                            variants={animatedItem({
                                y: 20,
                                delay: 0.1 * index,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={item?.id}
                            className={`w-full ${getCols(index)} `}
                        >
                            <motion.div
                                className={`w-full h-[240px] ${getCols(
                                    index
                                )} rounded-xl overflow-hidden`}
                                style={{
                                    background: `url(${item?.image}) lightgray 50% / cover no-repeat`,
                                }}
                            ></motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceGallery;
