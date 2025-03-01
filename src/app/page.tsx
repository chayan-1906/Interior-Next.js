import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Brands from "@/components/brands/Brands";
import Services from "@/components/services/Services";
import Banner from "@/components/banner/Banner";
import Banner2 from "@/components/banner/Banner2";
import Testimonial from "@/components/testimonial/Testimonial";
import NewsLetter from "@/components/newsletter/NewsLetter";
import Footer from "@/components/footer/Footer";

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
            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default Home;
