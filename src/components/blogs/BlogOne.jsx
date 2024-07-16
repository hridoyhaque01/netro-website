import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { blogPosts } from "@/lib/data";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

function BlogOne() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const portfolios = blogPosts?.slice(0, 3);
    const isActivePortfolio = (index = 0) => {
        return hoveredIndex === index || (hoveredIndex === null && index === 0);
    };
    const router = useRouter();

    return (
        <section className="px-6 pb-16">
            <div className="container2X bg-black-900 p-[60px] rounded-[32px]">
                <motion.h4
                    variants={animatedItem({ y: 5 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tag max-w-max"
                >
                    our Blog
                </motion.h4>
                <motion.h5
                    variants={animatedItem({
                        delay: 0.2,
                        blur: 6,
                        duration: 0.5,
                    })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title text-white mt-6"
                >
                    Latest insight & Innovation
                </motion.h5>

                <motion.div
                    variants={staggerList({ duration: 0.3 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-4 gap-6 mt-10"
                >
                    {portfolios.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem({ blur: 10, scale: 0.8 })}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`h-[475px] bg-black-500 rounded-3xl py-8 px-3 flex justify-end overflow-hidden ${
                                isActivePortfolio(index)
                                    ? "col-span-2"
                                    : "col-span-1"
                            }`}
                            layout
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 30,
                            }}
                            style={{
                                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100.75%), url(${item?.image}) lightgray 50% / cover no-repeat`,
                            }}
                        >
                            <div
                                className={`${
                                    isActivePortfolio(index)
                                        ? "w-full"
                                        : "[writing-mode:vertical-lr] rotate-180"
                                } flex flex-col justify-end text-white gap-6`}
                            >
                                {isActivePortfolio(index) && (
                                    <p>{item?.date}</p>
                                )}
                                <h4 className="max-h-[410px]  text-3xl font-bold">
                                    {item?.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex justify-center mt-12">
                    <motion.button
                        variants={animatedItem({ scale: 0.9 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        type="button"
                        className="flex-1 flex items-center justify-center py-5 px-6 text-black-900 bg-white rounded-full font-bold gap-2 max-w-max"
                        onClick={() => router.push("/blogs")}
                    >
                        <span>All Portfolio</span>

                        <ArrowAngle fill="#141414" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

export default BlogOne;
