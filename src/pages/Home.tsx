import BgDeco from "../components/bg-decoration";
import Header from "../components/Header";
function Home() {
    return (
        <>
            <section className="home-page bg-[#cbecdc] h-screen w-screen relative overflow-hidden 
                flex flex-col justify-center items-center">
                <BgDeco />
                <div
                    className="content w-3/4 relative z-10"
                >
                    <p className="text-[100px] ml-32 -rotate-[10deg] text-white mb-4 ">
                        Hello, I am
                    </p>
                    <p className="text-[100px] font-[Oswald] ml-96 text-[#779d8b]">
                        Tu Quy Dao
                    </p>
                    <div className="introduce flex gap-10 w-2/3 ml-[50%] translate-x-[-50%]">
                        <img src="https://placehold.jp/300x300.png" alt="" />
                        <p className="text-3xl font-[Oswald] text-justify flex items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat, quidem reiciendis obcaecati sequi
                            tempora ducimus autem dolorum illum. Dolores,
                            laudantium.
                        </p>
                    </div>
                </div>
                <Header page="Home" />
            </section>
        </>
    );
}

export default Home;
