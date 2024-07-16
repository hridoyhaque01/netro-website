import { animatedItem } from "@/lib/animations";
import { blogPosts } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function RelatedPortfolios() {
    const [emblaRef] = useEmblaCarousel({});
    const router = useRouter();
    const handleBlogRoute = (item) => {
        router.push(`/blogs/${item.id}`);
    };
    return (
        <div className="py-12 pb-20">
            <div className="containerX">
                <motion.h2
                    variants={animatedItem({ blur: 10 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title"
                >
                    Related Portfolios
                </motion.h2>
            </div>
            <div className="relative overflow-hidden mt-[60px]" ref={emblaRef}>
                <div className="relative flex items-center gap-6 ml-32">
                    {blogPosts.map((item, index) => (
                        <motion.div
                            variants={animatedItem({
                                x: 10,
                                blur: 10,
                                duration: 0.3,
                                delay: index * 0.1,
                            })}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={item.id}
                        >
                            <div
                                className="flex items-end min-w-[376px] w-full h-[276px] rounded-3xl p-5 text-white cursor-pointer"
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
                                    <h2 className="text-lg font-semibold mt-3">
                                        {item?.title}
                                    </h2>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RelatedPortfolios;
