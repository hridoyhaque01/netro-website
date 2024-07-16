import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { socialList } from "@/lib/data";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function FooterOne() {
    return (
        <footer>
            <div className="bg-black-900 pt-20 pb-[60px] rounded-t-[100px]">
                <div className="containerX">
                    <nav>
                        <motion.ul
                            variants={staggerList({
                                duration: 0.2,
                                delay: 0.1,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex justify-center items-center gap-10 text-white text-2xl py-10 border-y border-black-1000"
                        >
                            <motion.li variants={staggerItem({ x: 15 })}>
                                <Link href="/">Home</Link>
                            </motion.li>
                            <motion.li variants={staggerItem({ x: 15 })}>
                                <Link href="/">Service</Link>
                            </motion.li>
                            <motion.li variants={staggerItem({ x: 15 })}>
                                <Link href="/">Case Study</Link>
                            </motion.li>
                            <motion.li variants={staggerItem({ x: 15 })}>
                                <Link href="/">Portfolio</Link>
                            </motion.li>
                            <motion.li variants={staggerItem({ x: 15 })}>
                                <Link href="/">Blog</Link>
                            </motion.li>
                            <motion.li variants={staggerItem({ x: 15 })}>
                                <Link href="/">Career</Link>
                            </motion.li>
                            <motion.li variants={staggerItem({ x: 15 })}>
                                <Link href="/">Contact Us</Link>
                            </motion.li>
                        </motion.ul>
                    </nav>

                    <div className="w-full max-w-[592px] mx-auto text-center pt-8">
                        <motion.div
                            variants={animatedItem({
                                blur: 5,
                                scale: 0.9,
                                delay: 0.3,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <Image
                                src={images.footerLogo}
                                alt="Company Logo"
                                placeholder="blur"
                                blurDataURL={images?.blurHash}
                                width={0}
                                height={0}
                                className="max-w-[103px] mx-auto"
                            />
                        </motion.div>
                        <motion.p
                            variants={animatedItem({
                                blur: 5,
                                scale: 0.9,
                                delay: 0.4,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-lg text-neutral-200 mt-4 mb-8"
                        >
                            We’ve been committed to providing reliable and swift
                            private money lending services to our customers.
                        </motion.p>
                        <motion.ul
                            variants={staggerList({
                                duration: 0.2,
                                delay: 0.1,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex justify-center items-center gap-7"
                        >
                            {socialList?.map((item) => (
                                <motion.li
                                    variants={staggerItem({ y: 10 })}
                                    key={item?.id}
                                >
                                    <a
                                        href={item?.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Image
                                            src={item?.icon}
                                            width={24}
                                            height={24}
                                            alt="Social Icon"
                                            className="w-6 aspect-square object-contain"
                                        />
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>

            {/* copyright  */}
            <div className="bg-black-300 px-6 py-8">
                <div className="container2X">
                    <div className="flex items-center justify-between text-white">
                        <motion.p
                            variants={animatedItem({
                                blur: 5,
                                scale: 0.9,
                                delay: 0.5,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            © Weberr, Inc. All Rights Reserved.
                        </motion.p>
                        <motion.ul
                            variants={animatedItem({
                                blur: 5,
                                scale: 0.9,
                                delay: 0.5,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex justify-center items-center gap-8  text-base"
                        >
                            <li>
                                <Link href="/">Terms of use</Link>
                            </li>
                            <li>
                                <Link href="/">Privacy Policy</Link>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterOne;
