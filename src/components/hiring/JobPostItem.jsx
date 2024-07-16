import { animatedItem } from "@/lib/animations";
import { ArrowRight } from "@/lib/svgLists";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
function JobPostItem({ item, index }) {
    const router = useRouter();

    return (
        <motion.div
            className="py-7 px-10 rounded-3xl bg-black-500"
            key={item?.id}
            variants={animatedItem({
                x: 20,
                delay: index * 0.1,
            })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-between gap-6">
                <div>
                    <h4 className="text-4xl font-medium">{item?.title}</h4>
                    <p className="subtitle mt-2">{item?.location}</p>
                </div>
                <div className="text-right">
                    <Link
                        href={`/career/${item?.id}/apply_form`}
                        className="flex px-6 py-5 bg-white hover:bg-yellow-400 rounded-full text-xl font-bold text-black-900 gap-2 duration-300"
                    >
                        <span>Apply Now</span>
                        <ArrowRight stroke="#181A20" />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-between mt-6">
                <Link
                    href={`/career/jobs?job_details=${item?.id}`}
                    className="text-xl font-semibold underline"
                >
                    View Details
                </Link>

                <p className="subtitle">Deadline in {item?.deadline} days</p>
            </div>
        </motion.div>
    );
}

export default JobPostItem;
