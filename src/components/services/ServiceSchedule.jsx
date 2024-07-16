import { animatedItem } from "@/lib/animations";
import { images } from "@/lib/images";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";

function ServiceGallery() {
    return (
        <section className="py-[4.5rem] px-6 bg-main-300">
            <div className="containerX">
                <motion.h2
                    variants={animatedItem({ blur: 10 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title"
                >
                    Behind the Scenes: How We Built <br /> Netro, Professional
                </motion.h2>
                <div className="grid grid-cols-2 gap-10 mt-[3.75rem]">
                    <motion.div
                        variants={animatedItem({ blur: 5, scale: 0.94 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="h-[356px] relative">
                            <Image
                                src={images.service4}
                                alt="service image"
                                fill
                                priority={true}
                                className="w-full h-full object-cover bg-center rounded-3xl"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                        </div>
                    </motion.div>
                    <div className="flex flex-col justify-between gap-4">
                        <motion.p
                            variants={animatedItem({ blur: 10 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            The success of this project was not just about the
                            technology we used, but also about the professional
                            and transparent process we employed. We established
                            clear communication channels with client, providing
                            regular project updates, detailed documentation, and
                            a collaborative environment for feedback and
                            problem-solving. This transparency ensured that
                            everyone was aligned with the project goals,
                            timelines, and budget. The result was a seamless as
                            well.
                        </motion.p>
                        <motion.a
                            variants={animatedItem({ scale: 0.94 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            href="#"
                            className="flex max-w-max items-center gap-2 bg-blue-500 font-bold  py-5 pl-6 pr-4 rounded-full text-white"
                        >
                            Schedule a call
                            <ArrowAngle fill="#fff" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceGallery;
