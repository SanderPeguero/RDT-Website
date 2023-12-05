import Navbar from "../Navbar/Navbar"
import Feature from "../../components/Feature/Feature"
import Hero1 from "../../components/Hero1/Hero1"
import Hero2 from "../../components/Hero2/Hero2"
import CTA from "../../components/CTA/CTA"
import Partners from "../../components/Partners/Partners"
import Testimonials from "../../components/Testimonials/Testimonials"
import Pricing from "../../components/Pricing/Pricing"
import Contact from "../../components/Contact/Contact"
import Footer from "../Footer/Footer"


//RW-12
function Home({ setisAdmin = { setisAdmin }, isAdmin }) {

    // Here you should organize the different components that are going to make the website
    // The <br/> tag it's just a line jump so the example text can look good when you run the website

    // Please remove the <br/> tag when you code your asigned component
    return (
        <>
            <section id='home'><Hero1 /></section>
            <section id='feature'><Feature /></section>
            <section id='hero2'><Hero2 /></section>
            <section id='cta'><CTA /></section>
            <section id='partners'><Partners /></section>
            <section id='testimonials'><Testimonials /></section>
            <section id='pricing'><Pricing /></section>
            <section id='contact'><Contact /></section>
            <Footer />
        </>
    )

}

export default Home