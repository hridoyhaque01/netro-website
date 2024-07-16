import { animatedItem, staggerItem } from "@/lib/animations";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export const ServiceHeaderCard = ({ item }) => {
    const router = useRouter();
    const title = item?.title
        .replace(/<br\s*\/?>/g, "\n")
        .split("\n")
        .join(" ");

    const handleRouteChange = () => {
        router.push(`/services/${item?.id}`);
    };
    const [isHovered, setIsHovered] = useState(false);

    return (
        //parent
        <motion.div
            variants={staggerItem({ scale: 0.9, type: "easeInOut" })}
            className="px-8 py-6 border-b border-neutral-500 last:border-b-0 bg-black-900 hover:bg-black-1000 duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* header  */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-20 aspect-square flex items-center justify-center rounded-full bg-black-500">
                        <Image
                            src={item?.img}
                            alt={item?.title}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                    <h2 className="text-3xl font-semibold text-white">
                        {title}
                    </h2>
                </div>
                <motion.button
                    variants={animatedItem({ scale: 0.8 })}
                    initial="hidden"
                    animate={isHovered ? "visible" : "hidden"}
                    type="button"
                    onClick={handleRouteChange}
                    className="bg-blue-500 px-8 py-5 flex items-center gap-2 rounded-full text-white max-w-max"
                >
                    <span>Service Details</span>
                    <ArrowAngle fill="#fff" />
                </motion.button>
            </div>

            {/* content  */}
            <motion.div
                variants={animatedItem({ height: 0 })}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                className="overflow-hidden"
            >
                <div className="flex gap-8 pt-4">
                    <div className="relative flex-full max-w-[490px]">
                        <Image
                            src={item?.image}
                            width={490}
                            height={284}
                            alt="service image"
                            priority
                            className="w-full h-[284px] object-cover bg-center rounded-3xl"
                        />
                    </div>
                    <div className="">
                        <p className="text-lg text-neutral-400">
                            Eius tempor incididun. Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun.Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun. Lorem
                            ipsum dolor sit aconsectetur adipiscing elit, sed do
                            eius tempor incididun.d do eius tempor incididun.
                            Eius tempor incididun. Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun.Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun. Lorem
                            ipsum dolor sit aconsectetur adipiscing elit, sed do
                            eius tempor incididun.d do eius tempor incididun.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
