import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../images/Normal.jpg"

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;