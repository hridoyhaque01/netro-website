import { animatedItem } from "@/lib/animations";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ShineBorder from "../magicui/shine-border";

function ContactCard() {
    return (
        <motion.div
            variants={animatedItem({ scale: 0.9 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <ShineBorder
                className="w-full p-6 relative rounded-3xl bg-main-500"
                color={["#6D60FF", "#FF6B6B", "#FFC250"]}
                borderRadius={24}
            >
                <Image
                    src={images.contact}
                    width={1128}
                    height={188}
                    alt="contact thumbnail"
                    className="w-full max-h-[188px] object-cover bg-center rounded-2xl"
                />
                <div className="flex items-center mt-8">
                    <div>
                        <h2 className="text-4xl font-extrabold text-black-900">
                            Contact us for your project..
                        </h2>
                        <p className="text-black-600 font-light text-base">
                            Lorem ipsum dolor sit aconsectetur adipiscing elit,
                            sed do eius tempor incididun. Lorem ipsum dolor sit
                            aconsectetur adipiscing elit, sed do eius tempor
                            incididun.
                        </p>
                    </div>
                    <Link
                        href="/contact-us"
                        className="block w-full max-w-[269px] text-center text-white bg-black-950 rounded-full py-4 px-6"
                    >
                        Contact Us
                    </Link>
                </div>
            </ShineBorder>
        </motion.div>
    );
}

export default ContactCard;
