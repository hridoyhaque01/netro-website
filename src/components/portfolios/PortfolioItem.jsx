import { animatedItem } from "@/lib/animations";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

function PortfolioItem({ item = {}, isEven = false, index = 0 }) {
    const router = useRouter();

    return (
        <motion.div
            key={item?.id}
            className={isEven ? "row-span-2" : ""}
            variants={animatedItem({
                y: 20,
                delay: index * 0.1,
                duration: 0.4,
            })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div
                className={`w-full ${
                    isEven ? "h-[596px]" : "h-[498px]"
                } bg-black-950 rounded-3xl p-6 pb-8 flex flex-col gap-8 `}
                onClick={() => router.push(`/portfolio/${item?.id}`)}
            >
                <div className="w-full relative flex-1">
                    <Image
                        src={item?.image}
                        alt="Portfolio Image"
                        fill
                        placeholder="blur"
                        blurDataURL={images.blurHash}
                        priority={true}
                        className="w-full h-full object-cover bg-center rounded-3xl"
                        sizes="(max-width: 640px) 100vw, 640px"
                    />
                </div>

                <div>
                    <h2 className="text-4xl font-extrabold text-white">
                        {item?.title}
                    </h2>
                    <p className="text-main-100  font-light leading-[120%] mt-3">
                        {item?.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default PortfolioItem;
