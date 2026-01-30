import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Collaborators from '@/components/Collaborators'
// import About from '@/components/About'
// import Impact from '@/components/Impact'
// import Initiatives from '@/components/Initiatives'
// import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Collaborators />
      {/* <About /> */}
      {/* <Impact /> */}
      {/* <Initiatives /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}