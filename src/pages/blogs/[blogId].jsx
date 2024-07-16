import ContactOne from "@/components/contact/ContactOne";
import RecentPostOne from "@/components/resentPost/RecentPostOne";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { blogDetailsBread } from "@/lib/breadcrumbList";
import { blogPosts, socialList } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

function BlogDetails({ blog }) {
    return (
        <section>
            <div className="px-6 pt-[4.5rem] pb-20 bg-white">
                <div className="containerX">
                    <div className="mb-4">
                        <Breadcrumb lists={blogDetailsBread} />
                    </div>
                    <div className="">
                        <motion.h2
                            variants={animatedItem({
                                blur: 10,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-5xl font-bold text-black-900"
                        >
                            {blog?.title}
                        </motion.h2>
                        <div className="w-full mt-8 mb-10">
                            <motion.div
                                variants={animatedItem({
                                    scale: 0.94,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={blog?.image}
                                    alt={blog?.title}
                                    width={1176}
                                    height={412}
                                    priority
                                    className="w-full max-h-[412px] object-cover bg-center bg-no-repeat rounded-3xl"
                                />
                            </motion.div>
                            <div className="flex items-center justify-between gap-3 w-full mt-6">
                                <motion.span
                                    variants={animatedItem({
                                        blur: 8,
                                    })}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {new Date(
                                        blog?.timestamp * 1000
                                    ).toDateString()}
                                </motion.span>
                                <ul className="flex items-center flex-wrap gap-4">
                                    {blog.tags?.map((tag, index) => (
                                        <motion.li
                                            variants={animatedItem({
                                                x: 10,
                                                delay: index * 0.1,
                                            })}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            key={index}
                                            className="bg-main-300 text-black-900 py-1.5 px-4 rounded-full"
                                        >
                                            {tag}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <motion.p
                            variants={animatedItem({
                                blur: 10,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-black-600 text-lg leading-[120%]"
                        >
                            eius tempor incididun. Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun.Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun. Lorem
                            ipsum dolor sit aconsectetur adipiscing elit, sed do
                            eius tempor incididun.d do eius tempor incididun.
                            Lorem ipsum dolor sit aconsectetur adipiscing elit,
                            sed do eius tempor incididun.Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun. Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun.
                            <br />
                            <br />
                            d do eius tempor incididun. Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun.Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun. Lorem
                            ipsum dolor sit aconsectetur adipiscing elit, sed do
                            eius tempor incididun.d do eius tempor incididun.
                            Lorem ipsum dolor sit aconsectetur adipiscing elit,
                            sed do eius tempor incididun.Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun. Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun.
                            <br />
                            <br />
                            d do eius tempor incididun. Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun.Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun. Lorem
                            ipsum dolor sit aconsectetur adipiscing elit, sed do
                            eius tempor incididun.
                            <br />
                        </motion.p>

                        <motion.ul
                            variants={staggerList({
                                delay: 0.1,
                                duration: 0.2,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-1 list-disc list-inside mt-5"
                        >
                            <motion.li
                                variants={staggerItem({ x: 10 })}
                                className="text-xl text-black-600"
                            >
                                Create. Collaborate. Innovate.
                            </motion.li>
                            <motion.li
                                variants={staggerItem({ x: 10 })}
                                className="text-xl text-black-600"
                            >
                                Grow your career with support and resources.
                            </motion.li>
                            <motion.li
                                variants={staggerItem({ x: 10 })}
                                className="text-xl text-black-600"
                            >
                                Enjoy flexibility and a positive culture.
                            </motion.li>
                            <motion.li
                                variants={staggerItem({ x: 10 })}
                                className="text-xl text-black-600"
                            >
                                Make a difference on impactful projects.
                            </motion.li>
                            <motion.li
                                variants={staggerItem({ x: 10 })}
                                className="text-xl text-black-600"
                            >
                                Get rewarded for your contributions
                            </motion.li>
                        </motion.ul>

                        <motion.div
                            variants={animatedItem({ scale: 0.94 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <Image
                                src={blog?.image}
                                alt={blog?.title}
                                width={1176}
                                height={412}
                                priority
                                className="w-full max-h-[412px] object-cover bg-center bg-no-repeat rounded-3xl mt-10"
                            />
                        </motion.div>
                        <motion.p
                            variants={animatedItem({ blur: 10 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-black-600 text-lg leading-[120%] mt-10"
                        >
                            eius tempor incididun. Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun.Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun. Lorem
                            ipsum dolor sit aconsectetur adipiscing elit, sed do
                            eius tempor incididun.d do eius tempor incididun.
                            Lorem ipsum dolor sit aconsectetur adipiscing elit,
                            sed do eius tempor incididun.Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun. Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun.
                            <br />
                            <br />d do eius tempor incididun. Lorem ipsum dolor
                            sit aconsectetur adipiscing elit, sed do eius tempor
                            incididun.Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun. Lorem
                            ipsum dolor sit aconsectetur adipiscing elit, sed do
                            eius tempor incididun.d do eius tempor incididun.
                            Lorem ipsum dolor sit aconsectetur adipiscing elit,
                            sed do eius tempor incididun.Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun. Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun.
                        </motion.p>

                        <div className="flex items-center gap-6">
                            <motion.div
                                variants={animatedItem({ scale: 0.94 })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="w-full max-w-[576px]"
                            >
                                <Image
                                    src={blog?.image}
                                    alt={blog?.title}
                                    width={576}
                                    height={475}
                                    priority
                                    className="w-full max-h-[475px] object-cover bg-center bg-no-repeat rounded-3xl mt-10"
                                />
                            </motion.div>
                            <motion.div
                                variants={animatedItem({ scale: 0.94 })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="w-full max-w-[576px]"
                            >
                                <Image
                                    src={blog?.image}
                                    alt={blog?.title}
                                    width={576}
                                    height={475}
                                    priority
                                    className="w-full max-h-[475px] object-cover bg-center bg-no-repeat rounded-3xl mt-10"
                                />
                            </motion.div>
                        </div>

                        <motion.p
                            variants={animatedItem({ blur: 10 })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-black-600 text-lg leading-[120%] mt-10"
                        >
                            eius tempor incididun. Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun.Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun. Lorem
                            ipsum dolor sit aconsectetur adipiscing elit, sed do
                            eius tempor incididun.d do eius tempor incididun.
                            Lorem ipsum dolor sit aconsectetur adipiscing elit,
                            sed do eius tempor incididun.Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun. Lorem ipsum dolor sit aconsectetur
                            adipiscing elit, sed do eius tempor incididun.
                        </motion.p>
                        <div className="mt-14">
                            <motion.h4
                                variants={animatedItem({ blur: 10 })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-4xl text-black-900 font-bold"
                            >
                                Share this:
                            </motion.h4>

                            <ul className="flex items-center gap-4 mt-6">
                                {socialList?.map((item, index) => (
                                    <motion.li
                                        variants={animatedItem({
                                            y: 10,
                                            duration: 0.3,
                                            delay: 0.1 * index,
                                        })}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        key={index}
                                        className="w-[60px] aspect-square bg-black-900 rounded-full flex items-center justify-center"
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
                                                alt="social icon"
                                                className="w-6 aspect-square object-contain"
                                            />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main py-10 flex flex-col gap-20">
                <RecentPostOne />
                <ContactOne />
            </div>
        </section>
    );
}

export default BlogDetails;

export const getServerSideProps = async ({ params }) => {
    const { blogId } = params || {};
    const blog = blogPosts.find((item) => item.id == blogId);

    if (!blog) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            blog: blog,
        },
    };
};
