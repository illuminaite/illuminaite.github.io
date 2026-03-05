import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conference',
  description: 'illuminaite academy conference page with intro, contest, speakers, sponsors, and schedule',
}

export default function ConferencePage() {
  const contestLink = 'https://example.com/contest' // temporary placeholder

  const speakers = [
    { name: 'Alex Chen', role: 'AI Ethics Researcher', img: 'https://via.placeholder.com/300.png?text=Speaker+1', bio: 'Explores fairness and accountability in ML systems across healthcare and education.' },
    { name: 'Maya Patel', role: 'Policy & Governance', img: 'https://via.placeholder.com/300.png?text=Speaker+2', bio: 'Works on responsible AI policy and standards for public sector adoption.' },
    { name: 'Diego Martínez', role: 'HCI & Accessibility', img: 'https://via.placeholder.com/300.png?text=Speaker+3', bio: 'Designs inclusive interfaces and studies human-AI collaboration patterns.' },
    { name: 'Sara Ibrahim', role: 'Data Privacy', img: 'https://via.placeholder.com/300.png?text=Speaker+4', bio: 'Focuses on privacy-preserving analytics and ethical data sharing frameworks.' },
    { name: 'Keiko Tanaka', role: 'Creative AI', img: 'https://via.placeholder.com/300.png?text=Speaker+5', bio: 'Explores AI for art and media with an emphasis on authorship and consent.' },
    { name: 'Omar Hassan', role: 'Safety Engineering', img: 'https://via.placeholder.com/300.png?text=Speaker+6', bio: 'Builds tooling and evals for AI alignment and red-teaming in production systems.' },
  ]

  const sponsors = [
    { name: 'Sponsor 1', img: 'https://via.placeholder.com/300x180.png?text=Sponsor+1' },
    { name: 'Sponsor 2', img: 'https://via.placeholder.com/300x180.png?text=Sponsor+2' },
    { name: 'Sponsor 3', img: 'https://via.placeholder.com/300x180.png?text=Sponsor+3' },
    { name: 'Sponsor 4', img: 'https://via.placeholder.com/300x180.png?text=Sponsor+4' },
    { name: 'Sponsor 5', img: 'https://via.placeholder.com/300x180.png?text=Sponsor+5' },
    { name: 'Sponsor 6', img: 'https://via.placeholder.com/300x180.png?text=Sponsor+6' },
    { name: 'Sponsor 7', img: 'https://via.placeholder.com/300x180.png?text=Sponsor+7' },
    { name: 'Sponsor 8', img: 'https://via.placeholder.com/300x180.png?text=Sponsor+8' },
  ]

  const schedule = [
    {
      day: 'Day 1 — Opening (Sat)',
      items: [
        { time: '09:00', title: 'Check-in & Breakfast', where: 'Lobby' },
        { time: '10:00', title: 'Opening Remarks', where: 'Main Hall' },
        { time: '10:30', title: 'Keynote — Responsible AI in Practice', where: 'Main Hall' },
        { time: '11:30', title: 'Break', where: 'Foyer' },
        { time: '11:45', title: 'Talk — Human-Centered AI', where: 'Main Hall' },
        { time: '12:30', title: 'Lunch', where: 'Cafeteria' },
        { time: '14:00', title: 'Panel — Ethics Across Disciplines', where: 'Main Hall' },
      ],
    },
    {
      day: 'Day 2 — Workshops (Sun)',
      items: [
        { time: '09:30', title: 'Breakfast & Networking', where: 'Lobby' },
        { time: '10:30', title: 'Workshop A — Bias & Fairness', where: 'Room 201' },
        { time: '10:30', title: 'Workshop B — Privacy by Design', where: 'Room 204' },
        { time: '12:00', title: 'Lunch', where: 'Cafeteria' },
        { time: '13:30', title: 'Lightning Talks', where: 'Main Hall' },
        { time: '15:00', title: 'Closing & Next Steps', where: 'Main Hall' },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-20">
          {/* ================= INTRO ================= */}
          <div id="intro" className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-italiana tracking-wide text-center">Conference</h1>
            <div className="border-2 border-black p-6 md:p-8">
              <p className="font-caudex text-sm leading-relaxed text-gray-800 text-center max-w-3xl mx-auto">
                Join us for a two-day gathering exploring the intersections of AI, ethics, and society. Expect keynotes,
                hands-on workshops, and conversations that connect learners, builders, and creatives across disciplines.
              </p>
            </div>
          </div>

          {/* ================= CONTEST / FORM LINK ================= */}
          <div id="contest" className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide">CONFERENCE CONTEST</h2>
            <div className="border-2 border-black p-6 md:p-8 text-center">
              <p className="font-caudex text-sm leading-relaxed mb-6">
                Submit your project or idea to our Conference Contest. Winners will be featured during the event.
              </p>
              <a
                href={contestLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open conference contest form in a new tab"
                className="inline-block border border-black py-2.5 px-5 hover:bg-black hover:text-white transition-colors duration-200"
              >
                Open Contest Form
              </a>
            </div>
          </div>

          {/* ================= SPEAKERS ================= */}
          <div id="speakers" className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide">SPEAKERS</h2>
            <div className="border-2 border-black p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {speakers.map((s, i) => (
                  <div key={i} className="border border-black p-6 flex flex-col items-center text-center space-y-4">
                    {/* Use native img to avoid external domain config */}
                    <img
                      src={s.img}
                      alt={`${s.name} headshot`}
                      className="w-32 h-32 rounded-full object-cover border border-black"
                      width={128}
                      height={128}
                    />
                    <div>
                      <div className="text-xl md:text-2xl font-italiana tracking-wide">{s.name}</div>
                      <div className="text-xs uppercase tracking-wide mt-1">{s.role}</div>
                    </div>
                    <p className="font-caudex text-sm leading-relaxed text-left">
                      {s.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= SPONSORS ================= */}
          <div id="sponsors" className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide">SPONSORS</h2>
            <div className="border-2 border-black p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {sponsors.map((sp, i) => (
                  <div key={i} className="border border-black p-4 flex items-center justify-center bg-white">
                    <img
                      src={sp.img}
                      alt={`${sp.name} logo`}
                      className="max-h-16 object-contain"
                      height={64}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= SCHEDULE (ON-PAGE) ================= */}
          <div id="schedule" className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide">SCHEDULE</h2>
            <div className="border-2 border-black p-6 md:p-8 space-y-10">
              {schedule.map((block, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="border border-black py-3 px-4 text-center font-italiana text-2xl tracking-wide">
                    {block.day}
                  </div>
                  <div className="divide-y divide-black/30 border border-black">
                    {block.items.map((it, j) => (
                      <div key={j} className="grid grid-cols-12 gap-4 p-4">
                        <div className="col-span-12 sm:col-span-2 font-inter text-base">{it.time}</div>
                        <div className="col-span-12 sm:col-span-7 font-caudex text-sm leading-relaxed">{it.title}</div>
                        <div className="col-span-12 sm:col-span-3 text-xs tracking-wide">{it.where}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
