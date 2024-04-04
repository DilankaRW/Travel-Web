import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import AboutImg from "../images/Wild.jpg"

function Service(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;