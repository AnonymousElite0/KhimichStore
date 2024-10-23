import { createFileRoute } from "@tanstack/react-router"
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { FeatureSection } from "../components/FeatureSection";
import { WhatsAppButton } from "../components/WhatsappButton";

export const Route = createFileRoute("/home")({
    component: Home,
})



function Home(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-white to-[#ffb5ca]">
                <Navbar/>
                <Header/>
                <FeatureSection/>
                <WhatsAppButton/>
                <Footer/>
        </div>
    )
}