import { animatedItem } from "@/lib/animations";
import { blogPosts, categories } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import Search from "../ui/Search";

function BlogGallery() {
    const topBlogs = blogPosts.slice(0, 3);
    const featuredPost = blogPosts.slice(5);
    const router = useRouter();
    const handleBlogRoute = (item) => {
        router.push(`/blogs/${item.id}`);
    };
    return (
        <section className="px-6 pt-6 pb-20">
            <div className="containerX">
                <div className="flex gap-10">
                    <div className="flex-1 flex flex-col gap-6">
                        {topBlogs?.map((item, index) => (
                            <motion.div
                                variants={animatedItem({
                                    y: 20,
                                    blur: 10,
                                    delay: index * 0.1,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                key={item.id}
                            >
                                <div
                                    className="flex items-end w-full h-[330px] rounded-3xl p-5 text-white cursor-pointer"
                                    style={{
                                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100.75%), url(${item?.image}) lightgray 50% / cover no-repeat`,
                                    }}
                                    onClick={() => handleBlogRoute(item)}
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-3 w-full">
                                            <span>
                                                {new Date(
                                                    item?.timestamp * 1000
                                                ).toDateString()}
                                            </span>
                                            <ul className="flex items-center flex-wrap gap-4">
                                                {item.tags?.map(
                                                    (tag, index) => (
                                                        <li
                                                            className="bg-neutral-500 text-white py-1.5 px-4 rounded-full font-light"
                                                            key={index}
                                                        >
                                                            {tag}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <h2 className="text-3xl font-bold mt-3">
                                            {item?.title}
                                        </h2>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="w-full max-w-[466px]">
                        <div className="py-10 px-8 rounded-3xl bg-main-300">
                            <Search placeholder="Search" />

                            <motion.h2
                                variants={animatedItem({
                                    blur: 10,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-4xl text-black-900 font-bold my-6"
                            >
                                Featured
                            </motion.h2>

                            <div className="flex flex-col gap-4">
                                {featuredPost?.map((item, index) => (
                                    <motion.div
                                        variants={animatedItem({
                                            y: 20,
                                            blur: 10,
                                            delay: index * 0.1,
                                        })}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        key={item.id}
                                    >
                                        <div
                                            className="flex items-center gap-4"
                                            onClick={() =>
                                                handleBlogRoute(item)
                                            }
                                        >
                                            <Image
                                                src={item?.image}
                                                width={140}
                                                height={120}
                                                alt="featured"
                                                className="w-full max-w-[140px] h-[120px] object-cover rounded-lg"
                                            />

                                            <div>
                                                <p className="text-base text-black-600">
                                                    {new Date(
                                                        item?.timestamp * 1000
                                                    ).toDateString()}
                                                </p>
                                                <h4 className="text-2xl font-medium text-black-900 leading-[125%]">
                                                    {item?.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div>
                                <motion.h2
                                    variants={animatedItem({
                                        blur: 10,
                                    })}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="text-4xl text-black-900 font-bold my-6"
                                >
                                    Categories
                                </motion.h2>

                                <ul className="flex flex-col gap-4">
                                    {categories?.map((item, index) => (
                                        <motion.li
                                            variants={animatedItem({
                                                x: 20,
                                                blur: 6,
                                                delay: index * 0.1,
                                            })}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            key={item?.id}
                                            className="flex items-center gap-4 text-xl font-semibold text-black-950"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7 17.5L11 12.5L7 7.5"
                                                    stroke="#5536F5"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M13 17.5L17 12.5L13 7.5"
                                                    stroke="#5536F5"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>

                                            <span>{item?.name}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-x-6 gap-y-10 mt-10">
                    {blogPosts?.map((item, index) => (
                        <motion.div
                            variants={animatedItem({
                                y: 20,
                                blur: 10,
                                delay: index * 0.1,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={item.id}
                        >
                            <div
                                className="flex items-end w-full h-[276px] rounded-3xl p-5 text-white cursor-pointer"
                                style={{
                                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100.75%), url(${item?.image}) lightgray 50% / cover no-repeat`,
                                }}
                                onClick={() => handleBlogRoute(item)}
                            >
                                <div className="flex-1">
                                    <span>
                                        {new Date(
                                            item?.timestamp * 1000
                                        ).toDateString()}
                                    </span>
                                    <h2 className="text-3xl font-bold mt-3">
                                        {item?.title}
                                    </h2>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogGallery;
