import { teams } from "@/lib/data";
import TeamCard from "./TeamCard";

function TeamTwo() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="containerX">
                <div className="grid grid-cols-3 gap-y-10 gap-x-6">
                    {teams?.map((item, index) => (
                        <TeamCard item={item} key={item?.id} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamTwo;
