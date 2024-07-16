import { animatedItem } from "@/lib/animations";
import { jobLists } from "@/lib/data";
import { motion } from "framer-motion";
import JobPostItem from "./JobPostItem";
function HiringOne() {
    return (
        <section className="px-6 py-20 bg-black-900 text-white relative overflow-hidden">
            <div className="containerX">
                <motion.h4
                    variants={animatedItem({ y: 10 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tag max-w-max"
                >
                    jobs
                </motion.h4>
                <motion.h1
                    variants={animatedItem({
                        blur: 10,
                        duration: 0.4,
                        delay: 0.2,
                    })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title text-white"
                >
                    Opening opportunities
                </motion.h1>

                <div className="mt-16 flex flex-col gap-6">
                    {jobLists.map((item, index) => (
                        <JobPostItem key={item?.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HiringOne;
