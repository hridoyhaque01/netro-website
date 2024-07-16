import { companies } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "../magicui/marquee";

function CompanyOne() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-main-300 py-10">
            <h2 className="text-2xl text-black-800">
                Trusted by top companies
            </h2>
            <Marquee pauseOnHover={false} className="[--duration:20s]">
                {companies.map((company) => {
                    return (
                        <figure
                            className={cn(
                                "relative overflow-hidden p-6 flex items-center justify-center"
                            )}
                            key={company.id}
                        >
                            <Image
                                src={company.logo}
                                width={182}
                                height={32}
                                className="w-32 h-auto"
                                alt={`company logo ${company.id}`}
                            />
                        </figure>
                    );
                })}
            </Marquee>
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div> */}
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div> */}
        </div>
    );
}

export default CompanyOne;
