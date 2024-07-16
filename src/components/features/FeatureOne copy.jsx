import { features } from "@/lib/data";
import { motion } from "framer-motion";
import FeatureCardOne from "./FeatureCardOne";

function FeatureOne() {
    const parentVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
            },
        },
    };
    return (
        <section className="py-12 px-6 bg-white">
            <div className="containerX">
                <h1 className="title">Core values of “Netro”</h1>
                <div className="mt-[60px]">
                    <motion.div className="flex flex-col gap-8">
                        {features.map((item, index) => (
                            <FeatureCardOne
                                item={item}
                                index={index}
                                length={features.length}
                                key={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default FeatureOne;
