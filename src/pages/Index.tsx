import { Link, Outlet } from "react-router-dom";
import deco1 from "../assets/deco-1.png";
import deco2 from "../assets/deco-2.png";
export default function Index() {
    return (
        <>
            <section className="welcome-page bg-[#cbecdc] h-screen w-screen relative overflow-hidden flex justify-center items-center">
                <div className="decoration">
                    <img src={deco1} className="absolute -top-52 -right-24" />
                    <img src={deco1} className="absolute -bottom-72 -left-24" />
                    <img src={deco2} className="absolute -top-36 -left-36" />
                    <img
                        src={deco2}
                        className="absolute -bottom-80 -right-48"
                    />
                </div>
                <div className="welcome-content flex flex-col items-center relative w-full ml-52">
                    <h1
                        className="text-[120px] text-[#779d8b] mr-96 -mb-14 animate-slideLeft"
                        style={{ animationDelay: "100ms" }}
                    >
                        Welcome to my
                    </h1>
                    <p
                        className="font-[Oswald] font-bold text-[120px] text-white mr-24  -mb-4 tracking-[20px] animate-slideLeft"
                        style={{ animationDelay: "300ms" }}
                    >
                        Portofilo
                    </p>
                    <Link
                        to="/MyPortofilo/home"
                        className="text-white font-[Oswald] text-3xl cursor-pointer ml-[400px] bg-[#90d0b1] px-8 py-2 transition duration-500 animate-slideLeft"
                        style={{ animationDelay: "500ms" }}
                        id="seeMore"
                    >
                        See more
                    </Link>
                </div>
            </section>
            <Outlet />
        </>
    );
}
