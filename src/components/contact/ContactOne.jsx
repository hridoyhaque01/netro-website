import { animatedItem } from "@/lib/animations";
import { images } from "@/lib/images";
import ArrowAngle from "@/lib/svgLists";
import { motion } from "framer-motion";
import Image from "next/image";

function ContactOne({ className }) {
    return (
        <section className={`px-6 pb-16 ${className}`}>
            <div className="container2X bg-black-900 p-[60px] rounded-[32px] relative overflow-hidden">
                <motion.h1
                    variants={animatedItem({ blur: 5, duration: 0.4 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title text-white text-center"
                >
                    Contact us <br />
                    Quickly!
                </motion.h1>
                <motion.p
                    variants={animatedItem({
                        blur: 5,
                        delay: 0.2,
                        duration: 0.4,
                    })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-2xl text-black-600 text-center mt-4"
                >
                    With a simple step you will be connected with our trained
                    customer support manager.
                </motion.p>

                <div className="flex items-center justify-center gap-[3.75rem] w-full max-w-[996px] mx-auto mt-[60px] relative z-50">
                    <motion.form
                        variants={animatedItem({
                            blur: 5,
                            delay: 0.4,
                            duration: 0.4,
                        })}
                        initial="hidden"
                        animate="visible"
                        className="w-full max-w-[460px]"
                    >
                        <label
                            htmlFor="contactEmail"
                            className="flex items-center w-full py-2 pl-6 pr-2 bg-black-500 rounded-full"
                        >
                            <input
                                id="contactEmail"
                                type="email"
                                placeholder="Your email"
                                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-black-600 text-base"
                            />
                            <button
                                type="submit"
                                className="px-10 py-4 bg-yellow-400 text-black-900 rounded-full"
                            >
                                Submit
                            </button>
                        </label>
                    </motion.form>
                    <motion.a
                        variants={animatedItem({
                            blur: 8,
                            duration: 0.4,
                        })}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        href="#"
                        className="text-4xl font-semibold text-main-600 flex items-center"
                    >
                        <span>hello@netrosystems.io</span>
                        <ArrowAngle fill="white" />
                    </motion.a>
                </div>
                {/* bottom lines  */}
                <Image
                    src={images.lines}
                    width={520}
                    height={400}
                    alt="lines bottom"
                    priority={true}
                    className="w-full max-w-[520px] max-h-[400px] absolute bottom-0 left-0"
                />
                <Image
                    src={images.lines}
                    width={520}
                    height={400}
                    alt="lines top"
                    priority={true}
                    className="w-full max-w-[520px] max-h-[400px] absolute top-0 right-0 rotate-180"
                />
            </div>
        </section>
    );
}

export default ContactOne;
