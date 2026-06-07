import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events',
  description: 'The Lumens events — upcoming and past',
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="bg-white min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-12">
          {/* UPCOMING EVENTS */}
          <div id="upcoming">
            <h1 className="text-4xl md:text-5xl font-italiana tracking-wide text-center mb-6">
              UPCOMING EVENTS
            </h1>
            <div className="border-2 border-black p-6 md:p-8">
              <div className="grid grid-cols-1 gap-6">
                {/* Conference 2026 Fall */}
                <div className="border border-black p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-italiana tracking-wide">
                      Conference 2026 Fall
                    </h2>
                    <p className="font-caudex text-sm leading-relaxed mt-2">
                      Our flagship conference returning in Fall 2026. Agenda, speakers, and registration details coming soon.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a
                      href="/conference"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Conference 2026 Fall details in a new tab"
                      className="inline-block border border-black py-2.5 px-5 hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      View details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PAST EVENTS */}
          <div>
            <h2 className="text-3xl md:text-4xl font-italiana tracking-wide text-center mb-6">
              PAST EVENTS
            </h2>
            <div className="border-2 border-black p-6 md:p-8">
              <p className="font-caudex text-sm leading-relaxed text-center">
                Coming soon: browse highlights from our previous workshops, talks, and competitions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
