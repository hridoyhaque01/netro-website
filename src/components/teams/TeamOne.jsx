import { animatedItem } from "@/lib/animations";
import { teams } from "@/lib/data";
import ArrowAngle from "@/lib/svgLists";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Button, usePrevNextButtons } from "../embla/EmblaCarouselButtons";
import TeamCard from "./TeamCard";

const TeamOne = () => {
    const options = { align: "start", loop: false };
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const router = useRouter();

    return (
        <section className="py-12 px-6 bg-white">
            <div className="containerX">
                <motion.h4
                    variants={animatedItem({ y: 5 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tag max-w-max"
                >
                    Our team
                </motion.h4>
                <div className="flex items-center justify-between mt-6">
                    <motion.h5
                        variants={animatedItem({ delay: 0.2, blur: 6 })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="title text-black-900"
                    >
                        Meet the experts
                    </motion.h5>

                    <div className="flex items-center gap-6">
                        <Button
                            className="arrowBtn group"
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="13"
                                viewBox="0 0 18 13"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.292893 5.79298C-0.0976313 6.1835 -0.0976314 6.81667 0.292893 7.20719L5.62623 12.5405C6.01675 12.931 6.64992 12.931 7.04044 12.5405C7.43096 12.15 7.43096 11.5168 7.04044 11.1263L3.41421 7.50008L17 7.50008C17.5523 7.50008 18 7.05237 18 6.50008C18 5.9478 17.5523 5.50008 17 5.50008L3.41421 5.50008L7.04044 1.87386C7.43096 1.48333 7.43096 0.850166 7.04044 0.459642C6.64992 0.0691172 6.01675 0.0691172 5.62623 0.459642L0.292893 5.79298Z"
                                    className="arrowSvg"
                                />
                            </svg>
                        </Button>
                        <Button
                            className="arrowBtn group"
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="13"
                                viewBox="0 0 18 13"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.7071 7.20703C18.0976 6.8165 18.0976 6.18334 17.7071 5.79281L12.3738 0.45948C11.9832 0.0689552 11.3501 0.0689552 10.9596 0.45948C10.569 0.850003 10.569 1.48317 10.9596 1.87369L14.5858 5.49992H1C0.447718 5.49992 2.68221e-06 5.94763 2.68221e-06 6.49992C2.68221e-06 7.0522 0.447718 7.49992 1 7.49992H14.5858L10.9596 11.1261C10.569 11.5167 10.569 12.1498 10.9596 12.5404C11.3501 12.9309 11.9832 12.9309 12.3738 12.5404L17.7071 7.20703Z"
                                    className="arrowSvg"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1196px] mx-auto mt-16">
                <div className="overflow-hidden w-full" ref={emblaRef}>
                    <div className="flex">
                        {teams.map((item, index) => (
                            <motion.div
                                variants={animatedItem({
                                    x: 30,
                                    delay: index * 0.2,
                                })}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative flex-1/3 px-3"
                                key={item.id}
                            >
                                <TeamCard item={item} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <motion.button
                    type="button"
                    variants={animatedItem({ scale: 0.9 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onClick={() => router.push("/teams")}
                    className="flex-1 flex items-center justify-center py-5 px-10 text-white bg-black-900 rounded-full font-bold gap-2 max-w-max"
                >
                    <span>View all</span>

                    <ArrowAngle fill="#fff" />
                </motion.button>
            </div>
        </section>
    );
};

export default TeamOne;
