import {
    animatedItem,
    staggerItem,
    staggerList,
    svgAnimation,
} from "@/lib/animations";
import { counters } from "@/lib/data";
import { images } from "@/lib/images";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import NumberTicker from "../magicui/number-ticker";

function HeroOne() {
    const router = useRouter();
    return (
        <section className="px-6 py-[3.75rem]">
            <div className="containerX">
                {/* top part  */}
                <div className="flex items-end gap-12">
                    <motion.h1
                        variants={animatedItem({ blur: 10 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-black-900 text-7xl leading-[120%] font-bold italic shrink-0 relative"
                    >
                        We develop <br /> impactful products
                    </motion.h1>
                    <div className="flex flex-col gap-y-6">
                        <motion.p
                            variants={animatedItem({ blur: 10 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="font-light text-black-600 text-right"
                        >
                            Partner with us to unlock the full potential of your
                            business through tailored software solutions
                            designed to innovate, inspire, and ignite your
                            growth.
                        </motion.p>
                        <div className="flex items-center gap-6">
                            <motion.button
                                variants={animatedItem({
                                    scale: 0.8,
                                    delay: 0.3,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                type="button"
                                className="flex-1 py-5 px-4 border border-black-900 text-black-900 rounded-full font-bold"
                                onClick={() => router.push("/portfolio")}
                            >
                                Portfolios
                            </motion.button>
                            <motion.a
                                variants={animatedItem({
                                    scale: 0.8,
                                    delay: 0.3,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                href="tel:+919876543210"
                                className="flex-1 flex items-center justify-center py-5 px-4 text-white bg-blue-500 rounded-full font-bold gap-2"
                            >
                                <span>Schedule a call</span>
                                <ArrowAngle fill="#fff" />
                            </motion.a>
                        </div>
                    </div>
                </div>
                {/* bottom part  */}
                <div className="mt-[60px] flex gap-6 justify-between">
                    <div>
                        <motion.div
                            variants={animatedItem({
                                scale: 0.8,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Image
                                src={images.banner}
                                width={1076}
                                height={400}
                                placeholder="blur"
                                blurDataURL={images.blurHash}
                                alt="banner"
                                className="rounded-3xl"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            variants={animatedItem({})}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                variants={staggerList({ delay: 0.3 })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex items-center gap-6 -mt-20"
                            >
                                {counters?.map((counter) => (
                                    <motion.div
                                        variants={staggerItem({
                                            y: 20,
                                        })}
                                        className="p-4 rounded-2xl bg-black-900 text-white min-w-[216px] max-w-max text-center flex flex-col gap-2"
                                        key={counter.id}
                                    >
                                        <h2 className="text-5xl font-bold">
                                            <NumberTicker
                                                value={counter.count}
                                            />{" "}
                                            <span className="text-yellow-400">
                                                {counter.suffix}
                                            </span>
                                        </h2>
                                        <p>{counter.title}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={staggerList({})}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-5 items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2"
                            height="124"
                            viewBox="0 0 2 124"
                            fill="none"
                        >
                            <motion.path
                                d="M1 1.98975L1 122.99"
                                stroke="#222222"
                                strokeWidth="2"
                                strokeLinecap="round"
                                variants={svgAnimation({})}
                            />
                        </svg>

                        <motion.button
                            type="button"
                            className="py-6 px-1 text-black-900 border border-black-900 rounded-full [writing-mode:vertical-lr] rotate-180"
                            variants={animatedItem({ delay: 0.3, scale: 0.8 })}
                        >
                            Scroll Down
                        </motion.button>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="102"
                            viewBox="0 0 16 102"
                            fill="none"
                            variants={animatedItem({ height: 0, delay: 0.6 })}
                        >
                            <path
                                d="M9 1.98975C9 1.43746 8.55228 0.989746 8 0.989746C7.44772 0.989746 7 1.43746 7 1.98975H9ZM7.29289 101.717C7.68342 102.108 8.31658 102.108 8.70711 101.717L15.0711 95.3531C15.4616 94.9626 15.4616 94.3294 15.0711 93.9389C14.6805 93.5484 14.0474 93.5484 13.6569 93.9389L8 99.5957L2.34315 93.9389C1.95262 93.5484 1.31946 93.5484 0.928932 93.9389C0.538408 94.3294 0.538408 94.9626 0.928932 95.3531L7.29289 101.717ZM7 1.98975L7 101.01H9L9 1.98975H7Z"
                                fill="#222222"
                            />
                        </motion.svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroOne;
