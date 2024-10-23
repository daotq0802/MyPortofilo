import Header from "../components/Header";
import BgDeco from "../components/bg-decoration";

export default function About() {
    return (
        <>
            <section className="about-page bg-[#cbecdc] h-screen w-screen relative overflow-hidden flex justify-center items-center">
                <BgDeco />
                <Header page="About" />
            </section>
        </>
    );
}
