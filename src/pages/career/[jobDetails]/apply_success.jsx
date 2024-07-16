import Breadcrumb from "@/components/ui/Breadcrumb";
import { animatedItem } from "@/lib/animations";
import { jobLists } from "@/lib/data";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";

function ApplySuccess({ data }) {
    const jobBread = [
        {
            title: "Career",
            path: "/career",
        },
        {
            title: "Job Details",
            path: `/career/jobs?job_details=${data?.id}`,
        },
        {
            title: "Success",
            path: "",
        },
    ];

    return (
        <section className="px-6 pt-[4.5rem]  pb-20">
            <div className="containerX">
                <div className="flex flex-col gap-10">
                    <Breadcrumb wrapper="mb-4" lists={jobBread} />

                    <div className="w-full max-w-[550px] mx-auto text-center flex flex-col items-center gap-10">
                        <motion.div
                            variants={animatedItem({ scale: 0.9 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Image
                                src={images.success}
                                alt="success gifs"
                                width={320}
                                height={320}
                                priority
                                className="w-full max-w-[320px] aspect-square object-contain bg-center bg-no-repeat"
                            />
                        </motion.div>
                        <div>
                            <motion.h2
                                variants={animatedItem({
                                    blur: 10,
                                    delay: 0.2,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-[3.5rem] text-black-900 font-bold leading-[110%]"
                            >
                                Congratulations for Applying!
                            </motion.h2>

                            <motion.p
                                variants={animatedItem({
                                    blur: 10,
                                    delay: 0.3,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-black-700 text-xl font-light mt-6"
                            >
                                We appreciate your interest. Our HR team will
                                reach for next steps. Hope to see you at Netro!
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ApplySuccess;

export const getServerSideProps = (context) => {
    const { query } = context;
    const { jobDetails } = query || {};
    const job = jobLists?.find((item) => item?.id == jobDetails);
    return {
        props: {
            data: job,
        },
    };
};
