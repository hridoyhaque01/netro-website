"use client";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export default function GradualSpacing({
    text,
    duration = 0.5,
    delayMultiple = 0.04,

    framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },

    className,
}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px -50px 0px",
    });

    return (
        <div className="flex justify-center" ref={ref}>
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.h1
                        key={i}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit="hidden"
                        variants={framerProps}
                        transition={{ duration, delay: i * delayMultiple }}
                        className={cn("drop-shadow-sm", className)}
                    >
                        {char === " " ? <span>&nbsp;</span> : char}
                    </motion.h1>
                ))}
            </AnimatePresence>
        </div>
    );
}
