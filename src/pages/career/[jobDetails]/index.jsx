import JoinTeamOne from "@/components/teams/JoinTeamOne";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { careerDetailsBread } from "@/lib/breadcrumbList";
import { jobLists } from "@/lib/data";
import { images } from "@/lib/images";
import { ArrowRight, Success } from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
function JobDetails({ data }) {
    return (
        <section className="px-6 pt-[4.5rem]">
            <div className="containerX">
                <div className="flex flex-col gap-10">
                    <div>
                        <Breadcrumb wrapper="mb-4" lists={careerDetailsBread} />

                        <motion.div
                            variants={animatedItem({
                                scale: 0.94,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Image
                                src={data?.thumbnail}
                                alt={data?.title}
                                width={1176}
                                height={412}
                                priority
                                className="w-full max-h-[412px] object-cover bg-center bg-no-repeat rounded-3xl"
                            />
                        </motion.div>
                    </div>
                    <div className="flex items-center justify-between gap-14 w-full mt-10">
                        <div className="flex items-center gap-6">
                            <motion.div
                                variants={animatedItem({
                                    scale: 0.94,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={images.logoIcon}
                                    width={100}
                                    height={80}
                                    alt="company logo"
                                    className="w-24 h-auto object-contain"
                                />
                            </motion.div>
                            <div>
                                <motion.h2
                                    variants={animatedItem({
                                        blur: 10,
                                        duration: 0.4,
                                    })}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="text-black-900 text-[3.25rem] font-bold leading-[120%]"
                                >
                                    {data?.title}
                                </motion.h2>

                                <motion.ul
                                    variants={staggerList({
                                        delay: 0.1,
                                        duration: 0.2,
                                    })}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 list-disc list-inside text-xl text-black-600"
                                >
                                    <motion.li
                                        variants={staggerItem({ x: 12 })}
                                    >
                                        Netro
                                    </motion.li>

                                    <motion.li
                                        variants={staggerItem({ x: 12 })}
                                    >
                                        Level 6B, Hi-Tech Park, Rajshahi
                                    </motion.li>

                                    <motion.li
                                        variants={staggerItem({ x: 12 })}
                                    >
                                        Full time
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </div>
                        <div className="text-right flex flex-col gap-4">
                            <motion.div
                                variants={animatedItem({
                                    scale: 0.9,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="max-w-max"
                            >
                                <Link
                                    href={`/career/${data?.id}/apply_form`}
                                    className="flex px-6 py-5 bg-yellow-400 rounded-full text-xl font-bold text-black-900 gap-2 duration-300"
                                >
                                    <span>Apply Now</span>
                                    <ArrowRight stroke="#181A20" />
                                </Link>
                            </motion.div>

                            <motion.p
                                variants={animatedItem({
                                    blur: 5,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="subtitle"
                            >
                                Deadline in {data?.deadline} days
                            </motion.p>
                        </div>
                    </div>

                    {/* divider  */}
                    <div className="w-full border-t border-main-300"></div>
                    {/* Description */}
                    <motion.div
                        variants={animatedItem({
                            blur: 10,
                        })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-black-900 text-[2.5rem] font-semibold">
                            Description
                        </h3>
                        <p className="text-black-600 text-xl leading-[120%] mt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in volupta Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in volupta
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in volupta Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in volupta
                        </p>
                    </motion.div>
                    {/* Minimum Qualification */}
                    <div>
                        <motion.h3
                            variants={animatedItem({
                                blur: 10,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-black-900 text-[2.5rem] font-semibold"
                        >
                            Minimum Qualification
                        </motion.h3>

                        <motion.ul
                            variants={staggerList({
                                delay: 0.1,
                                duration: 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 mt-6"
                        >
                            {[...Array(6)]?.map((_, index) => (
                                <motion.li
                                    variants={staggerItem({ x: 12 })}
                                    className="flex items-center gap-2 text-black-600 text-xl"
                                    key={index}
                                >
                                    <Success fill="#2CC672" />
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                    {/* Preferred Qualification */}
                    <div>
                        <motion.h3
                            variants={animatedItem({
                                blur: 10,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-black-900 text-[2.5rem] font-semibold"
                        >
                            Preferred Qualification
                        </motion.h3>

                        <motion.ul
                            variants={staggerList({
                                delay: 0.1,
                                duration: 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 mt-6"
                        >
                            {[...Array(6)]?.map((_, index) => (
                                <motion.li
                                    variants={staggerItem({ x: 12 })}
                                    className="flex items-center gap-2 text-black-600 text-xl"
                                    key={index}
                                >
                                    <Success fill="#2CC672" />
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                    {/* Company Benefits */}
                    <div>
                        <motion.h3
                            variants={animatedItem({
                                blur: 10,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-black-900 text-[2.5rem] font-semibold"
                        >
                            Company Benefits
                        </motion.h3>

                        <motion.ul
                            variants={staggerList({
                                delay: 0.1,
                                duration: 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 mt-6"
                        >
                            {[...Array(6)]?.map((_, index) => (
                                <motion.li
                                    variants={staggerItem({ x: 12 })}
                                    className="flex items-center gap-2 text-black-600 text-xl"
                                    key={index}
                                >
                                    <Success fill="#2CC672" />
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
            <JoinTeamOne className="pt-32 pb-12" />
        </section>
    );
}

export default JobDetails;

export const getServerSideProps = (context) => {
    const { query } = context;
    const { job_details } = query || {};
    if (!job_details) return { notFound: true };
    const job = jobLists?.find((item) => item?.id == job_details);
    return {
        props: {
            data: job,
        },
    };
};
