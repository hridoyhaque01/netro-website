import { staggerItem, staggerList } from "@/lib/animations";
import { serviceDetailsBread } from "@/lib/breadcrumbList";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "../ui/Breadcrumb";

function ServiceDetailsHero({ service = {} }) {
    const title = service?.title
        ?.replace(/<br\s*\/?>/g, "\n")
        ?.split("\n")
        ?.join(" ");

    return (
        <section className="px-6 pb-8 pt-[4.5rem] bg-black-900 text-white">
            <div className="containerX">
                <div className="mb-4">
                    <Breadcrumb
                        lists={serviceDetailsBread}
                        listStyle="text-main-50"
                        iconColor="#f6f6f6"
                    />
                </div>
                <motion.div
                    className=""
                    variants={staggerList({ delay: 0.1, duration: 0.2 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={staggerItem({ scale: 0.95 })}>
                        <Image
                            src={service?.image}
                            alt={service?.title}
                            width={1176}
                            height={412}
                            priority
                            className="w-full max-h-[412px] object-cover bg-center bg-no-repeat rounded-3xl"
                        />
                    </motion.div>
                    <div className="flex items-center gap-6 mt-10">
                        <div className="flex flex-col gap-1 flex-1">
                            <motion.h2
                                variants={staggerItem({
                                    blur: 10,
                                })}
                                className="text-5xl font-bold text-yellow-400"
                            >
                                {title}
                            </motion.h2>
                            <motion.p
                                variants={staggerItem({ blur: 10 })}
                                className=""
                            >
                                Tags
                            </motion.p>
                        </div>
                        <motion.a
                            variants={staggerItem({ scale: 0.94 })}
                            href="#"
                            className="flex items-center gap-2 bg-blue-500  py-5 pl-6 pr-4 rounded-full"
                        >
                            Talk to an expert
                            <ArrowAngle fill="#fff" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceDetailsHero;
