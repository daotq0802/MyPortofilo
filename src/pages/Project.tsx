import BgDeco from "../components/bg-decoration";
import Header from "../components/Header";

export default function Project() {
    return (
        <>
            <section className="project-page bg-[#cbecdc] h-screen w-screen relative overflow-hidden flex justify-center items-center">
                <BgDeco />
                <Header page="Project" />
            </section>
        </>
    );
}
