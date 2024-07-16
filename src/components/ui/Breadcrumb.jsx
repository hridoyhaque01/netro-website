import { staggerItem, staggerList } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react";

function Breadcrumb({
    lists = [],
    wrapper = "",
    listStyle = "text-neutral-500",
    iconColor = "#6D6D6D",
}) {
    if (lists.length == 0) {
        return null;
    } else if (!Array.isArray(lists)) {
        return null;
    } else {
        return (
            <motion.ul
                variants={staggerList({ duration: 0.2, delay: 0.2 })}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex items-center gap-2 ${wrapper}`}
            >
                {lists?.map((item, index) => {
                    if (index == lists.length - 1) {
                        return (
                            <motion.li
                                variants={staggerItem({ x: 10 })}
                                className={`text-lg  uppercase font-semibold ${listStyle}`}
                                key={index}
                            >
                                {item?.title}
                            </motion.li>
                        );
                    } else {
                        return (
                            <Fragment key={index}>
                                <motion.li
                                    variants={staggerItem({ x: 10 })}
                                    className={`text-lg uppercase ${listStyle}`}
                                >
                                    <Link href={item?.path}>{item?.title}</Link>
                                </motion.li>
                                <motion.li variants={staggerItem({ x: 10 })}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                    >
                                        <path
                                            d="M10 7.5L14 12.5L10 17.5"
                                            stroke={iconColor}
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.li>
                            </Fragment>
                        );
                    }
                })}
            </motion.ul>
        );
    }
}

export default Breadcrumb;
