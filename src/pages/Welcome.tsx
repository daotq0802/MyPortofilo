import { Link } from "react-router-dom";
import BgDeco from "../components/bg-decoration";
export default function Index() {
    return (
        <>
            <section className="welcome-page bg-[#cbecdc] h-screen w-screen relative overflow-hidden flex justify-center items-center">
                <BgDeco />
                <div className="welcome-content flex flex-col items-center relative w-full lg:ml-52 max-sm:gap-8 ">
                    <h1
                        className="text-[120px] text-[#779d8b] lg:mr-96 lg:-mb-14 lg:animate-slideLeft lg:opacity-0
                        max-md:text-[80px] max-md:-mb-10
                        max-sm:text-[40px]"
                        style={{ animationDelay: "100ms" }}
                    >
                        Welcome to my
                    </h1>
                    <p
                        className="font-[Oswald] font-bold text-[120px] text-white lg:mr-24  lg:-mb-4 tracking-[20px] lg:animate-slideLeft lg:opacity-0
                        max-md:text-[80px]
                        max-sm:text-[40px] "
                        style={{ animationDelay: "300ms" }}
                    >
                        Portofilo
                    </p>
                    <Link
                        to="/MyPortofilo/home"
                        className="text-white font-[Oswald] text-3xl cursor-pointer lg:ml-[400px] bg-[#90d0b1] px-8 py-2 transition duration-500 lg:animate-slideLeft lg:opacity-0
                        max-md:text-2xl
                        max-sm:text-xl"
                        style={{ animationDelay: "500ms" }}
                        id="seeMore"
                    >
                        See more
                    </Link>
                </div>
            </section>
        </>
    );
}
