import { animatedItem } from "@/lib/animations";
import { motion } from "framer-motion";

function PortfolioDetailsContent({ data }) {
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
            </motion.div>
        </section>
    );
}

export default PortfolioDetailsContent;
