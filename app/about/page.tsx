import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import AboutSection from '@/components/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <Header />
            <AboutSection />
            <Footer />
        </main>
    )
}