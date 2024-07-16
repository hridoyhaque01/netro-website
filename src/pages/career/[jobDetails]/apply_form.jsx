import Breadcrumb from "@/components/ui/Breadcrumb";
import DatePicker from "@/components/ui/DatePicker";
import Input from "@/components/ui/Input";
import NumberInput from "@/components/ui/NumberInput";
import UploadCv from "@/components/ui/UploadCv";
import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { jobLists } from "@/lib/data";
import { ArrowRight } from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
function ApplyForm({ data }) {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push(`/career/${data?.id}/apply_success`);
    };

    const breadcrumbs = [
        {
            title: "Career",
            path: "/career",
        },
        {
            title: "Job Details",
            path: `/career/jobs?job_details=${data?.id}`,
        },
        {
            title: "Apply",
            path: ``,
        },
    ];

    return (
        <section className="px-6 pt-[4.5rem] pb-20">
            <div className="containerX">
                <div className="flex flex-col gap-10">
                    <div>
                        <Breadcrumb wrapper="mb-4" lists={breadcrumbs} />

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
                            <div>
                                <motion.h2
                                    variants={animatedItem({
                                        blur: 10,
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
                                        duration: 0.3,
                                    })}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 list-disc list-inside text-xl text-black-600"
                                >
                                    <motion.li
                                        variants={staggerItem({ x: 10 })}
                                    >
                                        Netro
                                    </motion.li>
                                    <motion.li
                                        variants={staggerItem({ x: 10 })}
                                    >
                                        Level 6B, Hi-Tech Park, Rajshahi
                                    </motion.li>
                                    <motion.li
                                        variants={staggerItem({ x: 10 })}
                                    >
                                        Full time
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </div>
                    </div>

                    {/* divider  */}
                    <div className="w-full border-t border-main-300"></div>

                    <div>
                        <div className="text-center">
                            <motion.h4
                                variants={animatedItem({
                                    blur: 10,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-black-900 text-[3.5rem] font-bold"
                            >
                                Application Form
                            </motion.h4>

                            <motion.p
                                variants={animatedItem({
                                    blur: 10,
                                    delay: 0.2,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-xl font-light text-black-700 max-w-[520px] mx-auto"
                            >
                                We love to hear from you. Our friendly team is
                                always here to contact with you.
                            </motion.p>
                        </div>
                        <motion.form
                            action=""
                            className="mt-10"
                            onSubmit={handleSubmit}
                            variants={animatedItem({
                                blur: 10,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-2 gap-y-6 gap-x-20">
                                {/* first name  */}
                                <Input
                                    label="First Name"
                                    placeholder="Enter your first name.."
                                    type="text"
                                    required
                                />
                                {/* last name  */}
                                <Input
                                    label="Last Name"
                                    placeholder="Enter last name.."
                                    type="text"
                                    required
                                />
                                {/* email  */}
                                <Input
                                    label="Email Address"
                                    placeholder="Enter email address.."
                                    type="email"
                                    required
                                />
                                {/* Phone Number */}
                                <NumberInput
                                    label="Phone Number"
                                    placeholder="Enter your phone number.."
                                    required
                                />
                                {/* Salary Expectation *  */}
                                <Input
                                    label="Salary Expectation"
                                    placeholder="xxxx-xxxx"
                                    type="email"
                                    required
                                />
                                {/* Experience *  */}
                                <Input
                                    label="Experience"
                                    placeholder="1 Year"
                                    type="email"
                                    required
                                />
                                {/* Previous Company Name *  */}
                                <Input
                                    label="Previous Company Name"
                                    placeholder="Enter name here"
                                    type="email"
                                    required
                                />
                                {/* Lives in City *  */}
                                <Input
                                    label="Lives in City"
                                    placeholder="Enter city"
                                    type="email"
                                    required
                                />
                                {/* Portfolio/GitHub Link *  */}
                                <Input
                                    label="Portfolio/GitHub Link"
                                    placeholder="Paste link here"
                                    type="email"
                                    required
                                />
                                {/* Date *  */}
                                <DatePicker
                                    label="Date"
                                    placeholder="DD-MM-YYYY"
                                />
                                {/* cv upload  */}
                                <UploadCv label="Upload your CV" />
                            </div>
                            <div className="flex items-center justify-center mt-[3.75rem]">
                                <motion.button
                                    variants={animatedItem({
                                        scale: 0.9,
                                    })}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    type="submit"
                                    className="flex w-full  max-w-[220px] justify-center items-center px-6 py-5 bg-yellow-400 rounded-full text-xl font-bold text-black-900 gap-2 duration-300"
                                >
                                    <span>Submit</span>
                                    <ArrowRight stroke="#181A20" />
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ApplyForm;

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
