import { animatedItem } from "@/lib/animations";
import { faqs } from "@/lib/data";
import { motion } from "framer-motion";
import Accordion from "../ui/Accordion";

function FaqOne() {
    return (
        <section className="py-12 px-6">
            <div className="containerX">
                <motion.h4
                    variants={animatedItem({ y: 5 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="tag max-w-max"
                >
                    Faq
                </motion.h4>
                <motion.h5
                    variants={animatedItem({ delay: 0.2, blur: 6 })}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="title mt-6"
                >
                    Frequently asked question
                </motion.h5>

                <div className="mt-16">
                    <div className="flex flex-col">
                        <Accordion
                            items={faqs}
                            titleKey="title"
                            textKey="content"
                            header="flex w-full text-[28px] font-medium text-black-900 items-center justify-between gap-4 py-8"
                            texts="text-xl text-black-600"
                            wrapper="border-b border-main-400 last:border-b-0"
                            base="pb-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqOne;
