import deco1 from "../assets/deco-1.png";
import deco2 from "../assets/deco-2.png";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <section className="about-page bg-[#cbecdc] h-screen w-screen relative overflow-hidden flex justify-center items-center">
                <div className="decoration">
                    <img src={deco1} className="absolute -top-52 -right-24" />
                    <img src={deco1} className="absolute -bottom-72 -left-24" />
                    <img src={deco2} className="absolute -top-36 -left-36" />
                    <img
                        src={deco2}
                        className="absolute -bottom-80 -right-48"
                    />
                </div>
                <Header page="About" />
            </section>
        </>
    );
}
