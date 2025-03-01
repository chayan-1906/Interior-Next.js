import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Brands from "@/components/brands/Brands";
import Services from "@/components/services/Services";
import Banner from "@/components/banner/Banner";
import Banner2 from "@/components/banner/Banner2";
import Testimonial from "@/components/testimonial/Testimonial";

function Home() {
    return (
        <div className={'overflow-x-hidden'}>
            <Navbar/>
            <Hero/>
            <Brands/>
            <Services/>
            <Banner/>
            <Banner2/>
            <Testimonial/>
        </div>
    );
}

export default Home;
