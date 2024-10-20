function Header() {
    return (
        <>
            <header
                className="w-full flex fixed top-0
                md:justify-evenly "
            >
                <nav
                    className="w-2/3  px-2 py-2 
                    md:flex md:gap-10 md:justify-evenly
                    max-md:bg-[#90d0b1] max-md:absolute max-md:top-0 max-md:flex
                    max-md:flex-col max-md:gap-2 max-md:items-start max-md:h-[100vh] max-md:w-[250px] -z-10 max-md:pt-20"
                >
                    <a 
                    href="/MyPortofilo/home"
                        className="font-bold transition duration-500 py-2 px-5
                        max-lg:text-base
                        lg:text-3xl
                        md:self-center
                        max-md:text-2xl"
                    >
                        Home
                    </a>
                    <a
                        href="/MyPortofilo/about"
                        className="font-bold transition duration-500 py-2 px-5
                        max-lg:text-base
                        lg:text-xl 
                        md:self-center"
                    >
                        About
                    </a>
                    <a
                        href="/MyPortofilo/project"
                        className="font-bold transition duration-500 py-2 px-5
                        max-lg:text-base
                        lg:text-xl 
                        md:self-center"
                    >
                        Project
                    </a>
                    <a
                        href="/MyPortofilo/contact"
                        className="font-bold transition duration-500 py-2 px-5
                        max-lg:text-base 
                        lg:text-xl 
                        md:self-center"
                    >
                        Contact
                    </a>
                    <button
                        className="px-5 py-2 rounded-2xl font-bold bg-[#90d0b1] transition duration-500 
                        max-lg:text-base
                        lg:text-xl lg:hover:bg-[#fff] lg:hover:text-[#779d8b]
                        md:self-center"
                    >
                        Download CV
                    </button>
                </nav>
                <i
                    onClick={showMenu}
                    className="fa-solid fa-bars md:hidden max-md:inline-block text-3xl p-2.5 text-white"
                ></i>
            </header>
        </>
    );
}
function showMenu() {
    document.getElementsByTagName("nav")[0].classList.toggle("active");
    document.getElementsByTagName("i")[0].classList.toggle("active");
}
export default Header;
