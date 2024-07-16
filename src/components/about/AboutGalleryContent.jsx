import { staggerItem, staggerList } from "@/lib/animations";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
function AboutGalleryContent() {
    return (
        <div className="bg-white py-24">
            <div className="containerX">
                <motion.div
                    variants={staggerList({ delay: 0.1, duration: 0.3 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-11 gap-10"
                >
                    <div className="col-span-6">
                        <motion.h4
                            variants={staggerItem({ y: 10 })}
                            className="tag max-w-max"
                        >
                            Who are netro
                        </motion.h4>
                        <motion.h2
                            variants={staggerItem({ blur: 10, duration: 0.2 })}
                            className="text-5xl text-black-900 font-bold leading-[120%] mt-6 mb-8"
                        >
                            “Netro” means Eye!
                        </motion.h2>
                        <motion.p
                            variants={staggerItem({ blue: 8, duration: 0.2 })}
                            className="text-xl text-black-600"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                        </motion.p>
                    </div>
                    <motion.div
                        variants={staggerItem({ y: 10 })}
                        className="col-span-5"
                    >
                        <Image
                            src={images.portfolio1}
                            width={0}
                            height={0}
                            alt="about"
                            priority={true}
                            className="w-full max-h-[280px] object-cover bg-center rounded-3xl"
                            sizes="(max-width: 640px) 100vw, 640px"
                        />
                    </motion.div>
                    <motion.div
                        variants={staggerItem({ y: 10 })}
                        className="col-span-6"
                    >
                        <Image
                            src={images.portfolio1}
                            width={0}
                            height={0}
                            alt="about"
                            priority={true}
                            className="w-full max-h-[280px] object-cover bg-center rounded-3xl"
                            sizes="(max-width: 640px) 100vw, 640px"
                        />
                    </motion.div>
                    <motion.div
                        variants={staggerItem({ y: 10 })}
                        className="col-span-5"
                    >
                        <Image
                            src={images.portfolio2}
                            width={0}
                            height={0}
                            alt="about"
                            priority={true}
                            className="w-full max-h-[280px] object-cover bg-center rounded-3xl"
                            sizes="(max-width: 640px) 100vw, 640px"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutGalleryContent;
