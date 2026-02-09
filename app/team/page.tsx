import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamSection from '@/components/Team'

export default function Team() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <Header />
            <TeamSection />
            <Footer />
        </main>
    )
}
