import { animatedItem } from "@/lib/animations";
import { strategyLists } from "@/lib/data";
import { motion } from "framer-motion";
function Strategy() {
    return (
        <section className="pt-[4.5rem] pb-32 px-6 bg-black-900">
            <div className="containerX">
                <h2 className="title text-white text-right">
                    Steps and strategy we <br />
                    followed for this project
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[3.75rem]">
                    {strategyLists?.map((item, index) => (
                        <motion.div
                            variants={animatedItem({
                                y: 15,
                                delay: index * 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={item?.id}
                        >
                            <div
                                className={`p-6 rounded-3xl border border-white w-full`}
                                style={{
                                    backgroundColor: item?.color,
                                    transform: `translateY(${index * 30}px)`,
                                }}
                            >
                                <h4 className="text-[1.75rem] font-medium text-black-900 mb-3">
                                    {item?.title}
                                </h4>
                                <p>{item?.description}</p>

                                <ul className="flex items-center gap-2 flex-wrap mt-10">
                                    {item?.tags?.map((tag, index) => (
                                        <li
                                            key={index}
                                            className="py-4 px-6 border border-black-700 text-black-700 rounded-full max-w-max"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Strategy;
