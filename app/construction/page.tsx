import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Under Construction | illuminaite academy',
  description: 'This page is currently under construction. Check back soon for updates!',
}

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl lg:text-7xl font-bold mb-8">
          <span className="gradient-text">under construction</span>
        </h1>
        <p className="text-xl lg:text-2xl text-primary-light/80 mb-12">
          we&rsquo;re working hard to bring you something amazing. check back soon!
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-coral hover:bg-primary-salmon text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
        >
          back to home
        </Link>
      </div>
    </main>
  )
}