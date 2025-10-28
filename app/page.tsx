import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Impact from '@/components/Impact'
import Initiatives from '@/components/Initiatives'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Articles from '@/components/Articles'

export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-[#700606] via-[#A53535] to-white" style={{
          background: 'linear-gradient(to bottom, #700606 0%, #A53535 55%, white 99%)'
      }}>
        <Navbar />
        <Hero />
        <About />
        <Initiatives />
        <Impact />
        <Articles />
        <Contact />
        <Footer />
    </main>
  )
}