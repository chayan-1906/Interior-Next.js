import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Brands from "@/components/brands/Brands";

function Home() {
    return (
        <div className={'overflow-x-hidden'}>
            <Navbar/>
            <Hero/>
            <Brands/>
        </div>
    );
}

export default Home;
