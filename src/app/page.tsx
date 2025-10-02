import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Impact from "@/components/sections/impact";
import Initiatives from "@/components/sections/initiatives";
import Navbar from "@/components/sections/navbar";
import '@/styles/global.css'

export default function Main() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <About />
            <Impact />
            <Initiatives />
            <Contact />
            <Footer />
        </div>
    )
}
