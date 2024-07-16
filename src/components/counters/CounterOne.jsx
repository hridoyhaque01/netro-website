import NumberTicker from "@/components/magicui/number-ticker";
import { staggerItem, staggerList } from "@/lib/animations";
import { counters } from "@/lib/data";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
function CounterOne() {
    return (
        <section className="px-6 py-20 bg-black-900 text-white relative overflow-hidden">
            <div className="containerX">
                <motion.div
                    variants={staggerList({ delay: 0.1 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-14"
                >
                    <div className="flex-1 max-w-[570px]">
                        <motion.h1
                            variants={staggerItem({ y: 10 })}
                            className="title"
                        >
                            Our fun fact
                        </motion.h1>
                        <motion.p
                            variants={staggerItem({ blur: 10 })}
                            className="text-xl text-black-600"
                        >
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={staggerList({ delay: 0.1 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1 grid grid-cols-2 gap-10 relative z-40"
                    >
                        {counters.map((counter) => (
                            <motion.div
                                variants={staggerItem({ x: 15 })}
                                className="w-full p-6 rounded-2xl bg-black-500 text-neutral-600 min-w-[216px] text-center flex flex-col gap-2"
                                key={counter.id}
                            >
                                <h2 className="text-5xl font-semibold">
                                    <NumberTicker
                                        value={counter.count}
                                        direction="up"
                                        delay={0}
                                    />
                                    <span className="text-yellow-100 font-normal">
                                        {counter.suffix}
                                    </span>
                                </h2>
                                <p className="text-2xl text-white">
                                    {counter.title}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <Image
                src={images.lines}
                width={520}
                height={400}
                alt="lines bottom"
                priority={true}
                className="w-full max-w-[520px] max-h-[400px] absolute bottom-0 left-0"
            />
            <Image
                src={images.lines}
                width={520}
                height={400}
                alt="lines top"
                priority={true}
                className="w-full max-w-[520px] max-h-[400px] absolute top-0 right-0 rotate-180"
            />
        </section>
    );
}

export default CounterOne;
