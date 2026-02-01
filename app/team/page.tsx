import Hero from '@/components/Hero'
import Collaborators from '@/components/Collaborators'
import Footer from '@/components/Footer'

export default function Team() {
    return (
        <main className="min-h-screen bg-black">
            <Hero />
            <Collaborators />
            <Footer />
        </main>
    )
}
