function Header({ page }: { page: string }) {
    return (
        <>
            <header
                className="w-full flex fixed top-0
                md:justify-evenly "
            >
                <nav
                    className="w-2/3  px-2 py-2 h-[100px] 
                    md:flex md:gap-10 md:justify-evenly 
                    max-md:bg-[#90d0b1] max-md:absolute max-md:top-0 max-md:flex
                    max-md:flex-col max-md:gap-2 max-md:items-start max-md:h-[100vh] max-md:w-[250px] -z-10 max-md:pt-20"
                >
                    {showHome(page)}
                    {showAbout(page)}
                    {showProject(page)}
                    {showContact(page)}
                    <button
                        className="px-5 py-2 rounded-2xl font-bold bg-[#90d0b1] transition duration-500 
                        max-lg:text-base
                        lg:text-2xl lg:hover:bg-[#fff] lg:hover:text-[#779d8b]
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
function showHome(page: string) {
    if (page == "Home") {
        return (
            <a
                href="/MyPortofilo/Home"
                className="font-bold transition duration-500 py-2 px-5 active
                        max-lg:text-2xl
                        lg:text-3xl
                        md:self-center"
            >
                Home
            </a>
        );
    } else {
        return (
            <a
                href="/MyPortofilo/Home"
                className="font-bold transition duration-500 py-2 px-5
                        max-lg:text-2xl
                        lg:text-3xl
                        md:self-center"
            >
                Home
            </a>
        );
    }
}

function showAbout(page: string) {
    if (page == "About") {
        return (
            <a
                href="/MyPortofilo/About"
                className="font-bold transition duration-500 py-2 px-5 active
                        max-lg:text-2xl
                        lg:text-3xl
                        md:self-center"
            >
                About
            </a>
        );
    } else {
        return (
            <a
                href="/MyPortofilo/About"
                className="font-bold transition duration-500 py-2 px-5
                        max-lg:text-2xl
                        lg:text-3xl
                        md:self-center"
            >
                About
            </a>
        );
    }
}

function showProject(page: string) {
    if (page == "Project") {
        return (
            <a
                href="/MyPortofilo/Project"
                className="font-bold transition duration-500 py-2 px-5 active
                        max-lg:text-2xl
                        lg:text-3xl
                        md:self-center"
            >
                Project
            </a>
        );
    } else {
        return (
            <a
                href="/MyPortofilo/Project"
                className="font-bold transition duration-500 py-2 px-5
                        max-lg:text-2xl
                        lg:text-3xl
                        md:self-center"
            >
                Project
            </a>
        );
    }
}
function showContact(page: string) {
    if (page == "Contact") {
        return (
            <a
                href="/MyPortofilo/Contact"
                className="font-bold transition duration-500 py-2 px-5 active
                        max-lg:text-2xl
                        lg:text-3xl
                        md:self-center"
            >
                Contact
            </a>
        );
    } else {
        return (
            <a
                href="/MyPortofilo/Contact"
                className="font-bold transition duration-500 py-2 px-5
                        max-lg:text-2xl
                        lg:text-3xl
                        md:self-center"
            >
                Contact
            </a>
        );
    }
}

function showMenu() {
    document.getElementsByTagName("nav")[0].classList.toggle("active");
    document.getElementsByTagName("i")[0].classList.toggle("active");
}
export default Header;
