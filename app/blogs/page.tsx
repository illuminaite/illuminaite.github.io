import BlogsDashboard from '@/components/blogs/BlogsDashboard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Blogs() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <BlogsDashboard />
            <Footer />
        </main>
    )
}