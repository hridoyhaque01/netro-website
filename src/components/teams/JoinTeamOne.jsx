import { animatedItem } from "@/lib/animations";
import { images } from "@/lib/images";
import { ArrowRight } from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";

function JoinTeamOne({ className = "" }) {
    return (
        <motion.section
            variants={animatedItem({ scale: 0.9 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`px-6 pb-16 ${className}`}
        >
            <div className="container2X bg-black-900 p-[60px] rounded-[32px] relative overflow-hidden">
                <motion.h1
                    variants={animatedItem({ blur: 10 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title text-white text-center mb-[60px]"
                >
                    Join in the team?
                </motion.h1>
                <motion.a
                    variants={animatedItem({ blur: 10 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    href="/"
                    target="_blank"
                    className="flex px-6 py-5 bg-yellow-400 rounded-full text-xl font-bold text-black-900 gap-2 duration-300 max-w-max mx-auto"
                >
                    <span>Apply Now</span>
                    <ArrowRight stroke="#181A20" />
                </motion.a>
                {/* bottom lines  */}
                <Image
                    src={images.lines}
                    width={0}
                    height={0}
                    alt="lines bottom"
                    priority={true}
                    className="w-full max-w-[380px] max-h-[400px] absolute bottom-0 left-0"
                    sizes="(max-width: 640px) 100vw, 640px"
                />
                <Image
                    src={images.lines}
                    width={0}
                    height={0}
                    alt="lines top"
                    priority={true}
                    className="w-full max-w-[380px] max-h-[400px] absolute top-0 right-0 rotate-180"
                    sizes="(max-width: 640px) 100vw, 640px"
                />
            </div>
        </motion.section>
    );
}

export default JoinTeamOne;
