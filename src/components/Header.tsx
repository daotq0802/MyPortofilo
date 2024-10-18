function Header() {
    return (
        <>
            <header
                className="w-full flex fixed 
                                        md:justify-evenly md:shadow-sm md:shadow-slate-400
                                        max-md:justify-around items-center h-20 py-2"
            >
                <img
                    src="src/assets/MyLogo.png"
                    alt="My Logo"
                    className="max-sm:w-16 max-md:w-20 md:w-1/12 h-full cursor-pointer"
                />
                <nav
                    className="w-2/3  px-2 py-2 
                                        md:flex md:gap-10 md:justify-evenly
                                        max-md:animate-slideDown max-md:absolute max-md:bottom-0 max-md:flex-col max-md:border-t-2 max-md:gap-2 max-md:items-start"
                >
                    <a
                        href="#"
                        className="font-bold transition duration-500 py-2
                        max-lg:text-base
                        lg:text-xl
                        md:self-center"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="font-bold transition duration-500 py-2
                        max-lg:text-base
                        lg:text-xl 
                        md:self-center"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="font-bold transition duration-500 py-2
                        max-lg:text-base
                        lg:text-xl 
                        md:self-center"
                    >
                        Project
                    </a>
                    <a
                        href="#"
                        className="font-bold transition duration-500 py-2 
                        max-lg:text-base 
                        lg:text-xl 
                        md:self-center"
                    >
                        Contact
                    </a>
                    <button
                        className="px-5 py-2 rounded-2xl font-bold bg-[#9d7979] transition duration-500 
                        max-lg:text-base
                        lg:text-xl lg:hover:bg-[#4ec0f4] lg:hover:text-white
                        md:self-center"
                    >
                        Download CV
                    </button>
                </nav>
                <i
                    onClick={showMenu}
                    className="fa-solid fa-bars md:hidden max-md:inline-block text-3xl p-2.5"
                ></i>
            </header>
        </>
    );
}
function showMenu() {
    document.getElementsByTagName("nav")[0].classList.toggle("active");
}
export default Header;
