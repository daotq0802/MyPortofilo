import deco1 from "../assets/deco-1.png";
import deco2 from "../assets/deco-2.png";

export default function BgDeco() {
    return (
        <>
            <div className="decoration ">
                <img
                    src={deco1}
                    className="absolute -top-52 -right-24 
                    max-sm:w-[150px] max-md:-top-0 max-md:-right-0
                    max-md:w-[250px]"
                />
                <img
                    src={deco1}
                    className="absolute -bottom-72 -left-24 
                    max-sm:w-[150px] max-md:bottom-0 max-md:left-0
                    max-md:w-[250px]"
                />
                <img
                    src={deco2}
                    className="absolute -top-36 -left-36 
                    max-sm:w-[150px] max-md:top-0 max-md:left-0
                    max-md:w-[250px]"
                />
                <img
                    src={deco2}
                    className="absolute -bottom-80 -right-48 
                        max-sm:w-[150px] max-md:bottom-0 max-md:right-0
                    max-md:w-[250px]"
                />
            </div>
        </>
    );
}
