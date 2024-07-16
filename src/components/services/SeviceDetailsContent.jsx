import { animatedItem } from "@/lib/animations";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";

function SeviceDetailsContent() {
    return (
        <section className="py-[4.5rem] px-6">
            <motion.div
                variants={animatedItem({ blur: 8, duration: 0.4 })}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="containerX"
            >
                <p className="text-black-600 text-xl leading-[120%]">
                    Lorem ipsum dolor sit aconsectetur adipiscing elit, sed do
                    eius tempor incididun. Lorem ipsum dolor sit aconsectetur
                    adipiscing elit, sed do eius tempor incididun.Lorem ipsum
                    dolor sit aconsectetur adipiscing elit,
                </p>
                <br />
                <p className="text-black-600 text-xl leading-[120%]">
                    sed do eius tempor incididun. Lorem ipsum dolor sit
                    aconsectetur adipiscing elit, sed do eius tempor
                    incididun.Lorem ipsum dolor sit aconsectetur adipiscing
                    elit, se
                </p>
                <br />
                <p className="text-black-600 text-xl leading-[120%]">
                    d do eius tempor incididun. Lorem ipsum dolor sit
                    aconsectetur adipiscing elit, sed do eius tempor
                    incididun.Lorem ipsum dolor sit aconsectetur adipiscing
                    elit, sed do eius tempor incididun. Lorem ipsum dolor sit
                    aconsectetur adipiscing elit, sed do eius tempor incididun.d
                    do eius tempor incididun. Lorem ipsum dolor sit aconsectetur
                    adipiscing elit, sed do eius tempor incididun.Lorem ipsum
                    dolor sit aconsectetur adipiscing elit, sed do eius tempor
                    incididun. Lorem ipsum dolor sit aconsectetur adipiscing
                    elit, sed do eius tempor incididun.
                </p>
                <br />
                <p className="text-black-600 text-xl leading-[120%]">
                    d do eius tempor incididun. Lorem ipsum dolor sit
                    aconsectetur adipiscing elit, sed do eius tempor
                    incididun.Lorem ipsum dolor sit aconsectetur adipiscing
                    elit, sed do eius tempor incididun. Lorem ipsum dolor sit
                    aconsectetur adipiscing elit, sed do eius tempor incididun.d
                    do eius tempor incididun. Lorem ipsum dolor sit aconsectetur
                    adipiscing elit, sed do eius tempor incididun.Lorem ipsum
                    dolor sit aconsectetur adipiscing elit, sed do eius tempor
                    incididun. Lorem ipsum dolor sit aconsectetur adipiscing
                    elit, sed do eius tempor incididun.
                </p>
                <br />
                <p className="text-black-600 text-xl leading-[120%]">
                    d do eius tempor incididun. Lorem ipsum dolor sit
                    aconsectetur adipiscing elit, sed do eius tempor
                    incididun.Lorem ipsum dolor sit aconsectetur adipiscing
                    elit, sed do eius tempor incididun. Lorem ipsum dolor sit
                    aconsectetur adipiscing elit, sed do eius tempor incididun.
                </p>
                <div className="mt-[3.75rem]">
                    <motion.a
                        variants={animatedItem({ scale: 0.94 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        href="#"
                        className="flex max-w-max items-center gap-2 bg-blue-500 font-bold  py-5 pl-6 pr-4 rounded-full text-white"
                    >
                        Reach us
                        <ArrowAngle fill="#fff" />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}

export default SeviceDetailsContent;
