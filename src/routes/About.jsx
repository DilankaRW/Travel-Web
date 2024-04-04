import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../images/Authentic.jpg"

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;