import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ContactSection } from "../components/ContactSection";


export const Route = createFileRoute("/contact")({
    component: Contact,
})

function Contact(){
    return (
        <>      
            <Navbar/>
            <ContactSection/>
            <Footer/>
        </>
    )
}

