import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { AboutContext } from "../components/AboutContext"

export const Route = createFileRoute('/about')({
  component: About
})

export function About(){
  return (
    <div className='bg-gradient-to-b from-white to-[#ffb5ca]'>
      <Navbar/>
      <AboutContext/>
      <Footer/>
    </div>
  );
};

