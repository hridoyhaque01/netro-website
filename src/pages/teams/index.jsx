import TeamHero from "@/components/hero/TeamHero";
import JoinTeamOne from "@/components/teams/JoinTeamOne";
import TeamTwo from "@/components/teams/TeamTwo";

function index() {
    return (
        <main>
            <TeamHero />
            <TeamTwo />
            <JoinTeamOne />
        </main>
    );
}

export default index;
