import { animatedItem, staggerItem, staggerList } from "@/lib/animations";
import { clientFeedbacks } from "@/lib/data";
import { QuoteYellow } from "@/lib/svgLists";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
const ClientFeedback = () => {
    const options = { align: "start", loop: false };
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    return (
        <section className="py-[4.5rem] px-6 bg-black-900 text-white">
            <div className="containerX">
                <motion.h5
                    variants={animatedItem({ delay: 0.2, blur: 6 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title"
                >
                    Client Feedback
                </motion.h5>
            </div>
            <div className="w-full max-w-[1196px] mx-auto mt-16">
                {/* carousel  */}
                <div className="overflow-hidden w-full" ref={emblaRef}>
                    <motion.div
                        variants={staggerList({ duration: 0.3, delay: 0.3 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex"
                    >
                        {clientFeedbacks?.map((item) => (
                            <motion.div
                                variants={staggerItem({ x: 30 })}
                                className="relative flex-full px-3 pl-10 pt-10"
                                key={item.id}
                            >
                                <div className="flex gap-16">
                                    <div className="relative shrink-0">
                                        <Image
                                            src={item?.image}
                                            width={242}
                                            height={242}
                                            alt="client profile"
                                            className="w-full max-w-[242px] aspect-square rounded-2xlobject-cover"
                                        />
                                        <QuoteYellow
                                            className="absolute -top-6 -left-10"
                                            fill="#FFC250"
                                        />
                                    </div>
                                    <p className="text-2xl font-light">
                                        With a passion for creativity and a keen
                                        eye for detail, I specialize in crafting
                                        intuitive and engaging user experiences.
                                        My journey as a designer has been driven
                                        by a commitment to transform ideas into
                                        captivating digital experiences that not
                                        only look stunning but also function
                                        seamlessly.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 mt-4">
                                    <h4 className="text-2xl font-extrabold">
                                        Johnathan Doe
                                    </h4>
                                    <p className="text-base">John Doe</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;
