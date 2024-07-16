import { animatedItem } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
function TeamCard({ item, index = 0 }) {
    return (
        <motion.div
            variants={animatedItem({ y: 30, delay: index * 0.2 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
        >
            <div className="w-full h-[420px] rounded-2xl bg-main-300 hover:bg-blue-500 duration-300 relative pt-6 px-6 group overflow-hidden">
                <div className="w-full h-full relative transform scale-100 origin-center group-hover:scale-105 transition-transform duration-300">
                    <Image
                        src={item?.img}
                        alt={item?.name}
                        width={410}
                        height={410}
                        priority
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
            <div className="w-[84%] mx-auto -mt-24 px-4 py-8 rounded-2xl bg-black-900 text-white relative z-40 text-center">
                <h3 className="text-3xl font-medium">{item?.name}</h3>
                <p className="text-xl font-light mb-6 mt-1">{item?.position}</p>
                <div className="flex items-center gap-6 justify-center">
                    {item?.socialList.map((social) => (
                        <a
                            href={social?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social?.id}
                            className="inline-block"
                        >
                            <Image
                                src={social?.icon}
                                alt="Description"
                                width={25}
                                height={25}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default TeamCard;
