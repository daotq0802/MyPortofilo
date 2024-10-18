function Header() {
    return (
        <>
            <header className="flex justify-around items-center h-20 fixed w-full max-xl:gap-0 max-lg:gap-1 max-md:gap-2 max-sm:gap-3" >
                <img src="src/assets/MyLogo.png" alt="My Logo" className="max-sm:w-10 max-md:w-20"/>
                <nav className="">
                    <a href="#" className="">Home</a>
                    <a href="#" className="">About</a>
                    <a href="#" className="">Project</a>
                    <a href="#" className="">Contact</a>
                </nav>
                <button className="">Download CV</button>
            </header>
        </>
    );
}

export default Header;
