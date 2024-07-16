import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { workLists } from "@/lib/data";
import { images } from "@/lib/images";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import VideoModal from "../modals/VideoModal";

function WorkOne() {
    return (
        <section className="py-12 px-6">
            <div className="containerX">
                <motion.h4
                    variants={animatedItem({ y: 5, duration: 0.5 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tag max-w-max"
                >
                    work Culture
                </motion.h4>
                <motion.h5
                    variants={animatedItem({
                        delay: 0.2,
                        blur: 6,
                        duration: 0.45,
                    })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title mt-6"
                >
                    How cool we are!
                </motion.h5>
                <div className="mt-16">
                    <div className="grid grid-cols-2 gap-6">
                        <motion.div
                            variants={staggerList({
                                delay: 0.2,
                                duration: 0.3,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-4"
                        >
                            <motion.div
                                variants={staggerItem({
                                    scale: 0.8,
                                    blur: 8,
                                })}
                                className="relative"
                            >
                                <Image
                                    src={images.work1}
                                    width={576}
                                    height={300}
                                    alt="work"
                                    className="w-full rounded-3xl"
                                />
                                <div className="w-full absolute top-0 left-0 h-full bg-black/40 rounded-3xl"></div>
                                <label
                                    htmlFor="modal-toggle"
                                    className="cursor-pointer flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl w-16 aspect-square bg-yellow-04 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="32"
                                        viewBox="0 0 30 32"
                                        fill="none"
                                    >
                                        <path
                                            d="M28.7812 17.6919C28.0743 20.378 24.7333 22.2761 18.0515 26.0721C11.5921 29.7418 8.3624 31.5767 5.75967 30.8392C4.6836 30.5342 3.70318 29.9551 2.91249 29.1574C1 27.2278 1 23.4852 1 16C1 8.5148 1 4.7722 2.91249 2.84264C3.70318 2.04489 4.6836 1.46577 5.75967 1.16084C8.3624 0.423298 11.5921 2.25815 18.0515 5.92785C24.7333 9.72394 28.0743 11.622 28.7812 14.3081C29.0729 15.4168 29.0729 16.5832 28.7812 17.6919Z"
                                            fill="#5536F5"
                                            stroke="#5536F5"
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </label>
                            </motion.div>
                            <motion.h3
                                variants={staggerItem({
                                    blur: 6,
                                })}
                                className="text-[40px] text-black-900 font-medium leading-[110%]"
                            >
                                Who we are and what we stand for our values
                            </motion.h3>
                            <motion.p
                                variants={staggerItem({
                                    blur: 6,
                                })}
                                className="text-black-600 text-xl"
                            >
                                Lorem ipsum dolor sit aconsectetur adipiscing
                                elit, sed do eius tempor incididun.Lorem ipsum
                                dolor sit aconsectetur adipiscing elit, sed do
                                eius tempor incididun
                            </motion.p>
                            <motion.div
                                variants={staggerItem({
                                    scale: 0.8,
                                })}
                            >
                                <a
                                    href="tel:+919876543210"
                                    className="flex-1 flex max-w-max items-center justify-center py-5 px-8 text-white bg-black-950 rounded-full font-bold gap-2"
                                >
                                    <span>Learn More</span>
                                    <ArrowAngle fill="#fff" />
                                </a>
                            </motion.div>
                        </motion.div>
                        <Gallery
                            options={{
                                padding: {
                                    top: 20,
                                    bottom: 40,
                                    left: 100,
                                    right: 100,
                                },
                            }}
                        >
                            <div className="grid grid-cols-2 gap-6">
                                {workLists?.map((item, index) => (
                                    <motion.div
                                        variants={animatedItem({
                                            x: 20,
                                            blur: 8,
                                            delay: 0.2 * index,
                                        })}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        key={index}
                                    >
                                        <Item
                                            original={item?.img}
                                            thumbnail={item?.img}
                                            width="1024"
                                            height="768"
                                        >
                                            {({ ref, open }) => (
                                                <Image
                                                    ref={ref}
                                                    onClick={open}
                                                    src={item?.img}
                                                    width={276}
                                                    height={196}
                                                    alt="work images"
                                                    priority={true}
                                                    className="w-full h-[196px] object-cover bg-center rounded-3xl duration-300"
                                                />
                                            )}
                                        </Item>
                                    </motion.div>
                                ))}
                            </div>
                        </Gallery>
                    </div>
                </div>
            </div>
            <VideoModal />
        </section>
    );
}

export default WorkOne;
