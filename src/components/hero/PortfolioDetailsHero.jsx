import { staggerItem, staggerList } from "@/lib/animations";
import { portfolioDetailsBread } from "@/lib/breadcrumbList";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import Breadcrumb from "../ui/Breadcrumb";
import VideoItem from "../videos/VideoItem";

function PortfolioDetailsHero({ data = {} }) {
    return (
        <section className="px-6 pb-8 pt-[4.5rem] bg-black-900 text-white">
            <div className="containerX">
                <div className="mb-8">
                    <Breadcrumb
                        lists={portfolioDetailsBread}
                        listStyle="text-main-50"
                        iconColor="#f6f6f6"
                    />
                    <motion.h2
                        variants={staggerItem({
                            blur: 10,
                        })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-5xl font-bold mt-4"
                    >
                        {data?.title}
                    </motion.h2>
                </div>
                <motion.div
                    className=""
                    variants={staggerList({ delay: 0.1, duration: 0.1 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <VideoItem className="h-[412px]" />
                    <div className="flex items-center gap-6 mt-10">
                        <div className="flex-1 flex gap-16">
                            <div className="flex flex-col gap-1">
                                <motion.h2
                                    variants={staggerItem({
                                        blur: 10,
                                    })}
                                    className="text-5xl font-bold text-yellow-400"
                                >
                                    UIUX Design
                                </motion.h2>
                                <motion.p
                                    variants={staggerItem({ blur: 10 })}
                                    className=""
                                >
                                    Category
                                </motion.p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <motion.h2
                                    variants={staggerItem({
                                        blur: 10,
                                    })}
                                    className="text-5xl font-bold text-yellow-400"
                                >
                                    USA
                                </motion.h2>
                                <motion.p
                                    variants={staggerItem({ blur: 10 })}
                                    className=""
                                >
                                    Client Origin
                                </motion.p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <motion.h2
                                    variants={staggerItem({
                                        blur: 10,
                                    })}
                                    className="text-5xl font-bold text-yellow-400"
                                >
                                    45 days
                                </motion.h2>
                                <motion.p
                                    variants={staggerItem({ blur: 10 })}
                                    className=""
                                >
                                    Timeline
                                </motion.p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <motion.a
                                variants={staggerItem({ scale: 0.94 })}
                                href="#"
                                className="flex items-center gap-2 border border-white py-5 pl-6 pr-4 rounded-full"
                            >
                                Live Preview
                            </motion.a>
                            <motion.a
                                variants={staggerItem({ scale: 0.94 })}
                                href="#"
                                className="flex items-center gap-2 bg-blue-500  py-5 pl-6 pr-4 rounded-full"
                            >
                                Talk to an expert
                                <ArrowAngle fill="#fff" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default PortfolioDetailsHero;
