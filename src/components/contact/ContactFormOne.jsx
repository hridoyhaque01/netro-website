import { animatedItem } from "@/lib/animations";
import { contactInformations } from "@/lib/data";
import { ArrowRight } from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";

function ContactFormOne() {
    return (
        <section className="px-6 pt-6 pb-20">
            <motion.div
                variants={animatedItem({
                    blur: 10,
                    scale: 0.9,
                    duration: 0.4,
                })}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="containerX bg-black-900 rounded-3xl text-white p-8"
            >
                <div className="flex gap-14">
                    <div className="flex-1 max-w-[526px] bg-yellow-400 py-11 px-10 rounded-3xl">
                        <h4 className="text-4xl font-bold text-black-900">
                            Contact Information
                        </h4>

                        <p className="text-black-600 mt-4">
                            We love to hear from you. Our friendly team is
                            always here to contact with you.
                        </p>

                        <div className="flex flex-col gap-7 mt-[60px]">
                            {contactInformations?.map((item) => (
                                <div
                                    className="flex items-center gap-4"
                                    key={item?.id}
                                >
                                    <Image
                                        src={item?.icon}
                                        width={24}
                                        height={24}
                                        alt="contact icon"
                                        className="w-6 aspect-square object-contain"
                                    />

                                    <div>
                                        <p className="text-black-900 font-semibold">
                                            {item?.title}:
                                        </p>
                                        <p className="text-black-600 mt-1">
                                            {item?.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="flex-1">
                        <h4 className="text-xl">
                            We listen to our clients and well-wishers..
                        </h4>
                        <div className="flex flex-col gap-2 mt-8">
                            <label htmlFor="email" className="text-base">
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="example@email.com"
                                type="text"
                                className="text-white placeholder:text-neutral-800 border border-neutral-100 bg-transparent outline-none w-full p-4 rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4 mb-8">
                            <label htmlFor="message" className="text-base">
                                Your Message
                            </label>
                            <textarea
                                placeholder="Message..."
                                className="text-white placeholder:text-neutral-800 border border-neutral-100 bg-transparent outline-none w-full h-[198px] p-4 rounded-xl"
                            />
                        </div>

                        <button className="flex items-center justify-center w-full max-w-[240px] px-6 py-5 bg-white hover:bg-yellow-400 rounded-full text-xl font-bold text-black-900 gap-2 duration-300">
                            <span>Submit</span>
                            <ArrowRight stroke="#181A20" />
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}

export default ContactFormOne;
