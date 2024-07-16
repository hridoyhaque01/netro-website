import useWindowScroll from "@/hooks/useWindowScroll";
import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function HeaderOne() {
    const isScrolling = useWindowScroll();
    return (
        <div
            id="scroll-target"
            className={`py-5 px-6 sticky top-0  w-full max-w-[1440px] mx-auto  border-b border-main-400 z-[99] duration-300 ${
                isScrolling ? "shadow-box bg-main" : "bg-white"
            }`}
        >
            <div className="containerX">
                <div className="flex items-center justify-between">
                    {/* logo  */}
                    <motion.div
                        variants={animatedItem({ scale: 0.9 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-max"
                    >
                        <Link href="/">
                            <Image
                                src={images?.logo}
                                width={224}
                                height={46}
                                alt="Your Company Name Logo"
                                placeholder="blur"
                                blurDataURL={images?.blurHash}
                                className="md:w-[224px] h-auto duration-200"
                            />
                        </Link>
                    </motion.div>

                    {/* links  */}
                    <motion.nav
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.ul
                            variants={staggerList({
                                delay: 0.1,
                                duration: 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-center gap-12 font-medium capitalize"
                        >
                            <motion.li
                                className="text-black-900"
                                variants={staggerItem({
                                    x: 20,
                                    duration: 0.5,
                                })}
                            >
                                <Link href="/services">Service</Link>
                            </motion.li>
                            <motion.li
                                className="text-black-900"
                                variants={staggerItem({
                                    x: 20,
                                    duration: 0.5,
                                })}
                            >
                                <Link href="/portfolio">Portfolio</Link>
                            </motion.li>
                            <motion.li
                                className="text-black-900"
                                variants={staggerItem({
                                    x: 20,
                                    duration: 0.5,
                                })}
                            >
                                <Link href="/about-us">About Us</Link>
                            </motion.li>
                            <motion.li
                                className="text-black-900"
                                variants={staggerItem({
                                    x: 20,
                                    duration: 0.5,
                                })}
                            >
                                <Link href="/career">Career</Link>
                            </motion.li>
                            <motion.li
                                className="text-black-900"
                                variants={staggerItem({
                                    x: 20,
                                    duration: 0.5,
                                })}
                            >
                                <Link href="/blogs">Blogs</Link>
                            </motion.li>
                            <motion.li
                                className="text-black-900"
                                variants={staggerItem({
                                    x: 20,
                                    duration: 0.5,
                                })}
                            >
                                <Link href="/contact-us">Contact Us</Link>
                            </motion.li>
                        </motion.ul>
                    </motion.nav>
                </div>
            </div>
        </div>
    );
}

export default HeaderOne;
