import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'AI Ethics Conference 2026',
  description: 'Conference details, schedule, speakers, and networking guests for March 7-8, 2026.',
}

export default function ConferencePage() {
  type ScheduleItem = {
    time: string
    title: string
  }

  type Person = {
    name: string
    session: string
    role: string
    bio: string
  }

  type Guest = {
    name: string
    role: string
    bio: string
  }

  const schedule: { day: string; date: string; items: ScheduleItem[] }[] = [
    {
      day: 'Day 1: Ethics',
      date: 'March 7, 2026',
      items: [
        { time: '9:00 - 10:00', title: 'Registration + breakfast' },
        { time: '10:00 - 10:30', title: 'Opening talk + Overview of AI Ethics' },
        { time: '10:30 - 11:30', title: 'Talk 1: Tina Yong - Deepfakes and Freedom of Expression' },
        { time: '11:30 - 12:30', title: 'Talk 2: Bruce Schneier - Integrous AI' },
        { time: '12:30 - 1:30', title: 'Lunch and networking' },
        { time: '1:30 - 2:30', title: 'Talk 3: Alicia Demanuele - AI and Policy' },
        { time: '2:30 - 3:15', title: 'Workshop 1: Matthew Tamura - Introduction to AI Interpretability' },
        { time: '3:15 - 3:45', title: 'Talk 4: Riccardo Di Sipio - Epistemic Machines' },
        { time: '3:45 - 4:45', title: 'Panel 1: Jude Kong, Jeffrey Sun, Alex Mariakakis - Modelling with AI' },
        { time: '4:45 - 5:00', title: 'Closing' },
      ],
    },
    {
      day: 'Day 2: Society',
      date: 'March 8, 2026',
      items: [
        { time: '9:00 - 9:30', title: 'Registration + breakfast' },
        { time: '9:30 - 9:45', title: 'Opening talk' },
        { time: '9:45 - 10:45', title: 'Panel 2: Sheila McIlraith, David Liu - Embedded Ethics Education (E3I)' },
        { time: '10:45 - 11:30', title: 'Talk 5: Benjamin Sanchez-Lengeling - Scientific Discovery' },
        { time: '11:30 - 12:00', title: 'Workshop 2: Nazy Thakkar - VC 101: From Pitch to Partnership' },
        { time: '12:00 - 1:30', title: 'Lunch and networking' },
        { time: '1:30 - 2:30', title: 'Panel 3: Karen Young, Feyisayo Enujuni, Christine Tang - Women in Computer Science Careers' },
        { time: '2:30 - 3:30', title: 'Talk 6: Paolo Granata - AI and Epistemic Virtues' },
        { time: '3:30 - 4:00', title: 'Talk 7: Ramaravind Mothilal' },
        { time: '4:00 - 5:00', title: 'Awards and closing' },
      ],
    },
  ]

  const day1Speakers: Person[] = [
    {
      name: 'Tina Yong',
      session: 'Talk 1: Deepfakes and Freedom of Expression',
      role: 'PhD Candidate @ University of Toronto (UofT)',
      bio: 'Tina is a PhD student in the political science department, where her research sits at the intersection of AI ethics and law.',
    },
    {
      name: 'Bruce Schneier',
      session: 'Talk 2: Integrous AI',
      role: 'Adjunct Professor, Munk School @ UofT',
      bio: 'Internationally renowned security technologist and public intellectual, known for work on cryptography, cybersecurity, and AI governance.',
    },
    {
      name: 'Alicia Demanuele',
      session: 'Talk 3: AI and Policy',
      role: 'AI Policy Researcher @ Schwartz Reisman Institute (SRI)',
      bio: 'Researches responsible AI policy and governance for practical deployment contexts.',
    },
    {
      name: 'Matthew Tamura',
      session: 'Workshop 1: Introduction to AI Interpretability',
      role: 'Research Assistant, Human-Centred Data Science Lab',
      bio: 'Researches human-centred data science with a focus on interpretable and transparent machine learning systems.',
    },
    {
      name: 'Riccardo Di Sipio',
      session: 'Talk 4: Epistemic Machines: From Uncertainty to (Inter)Action in Human-AI Ensembles',
      role: 'Senior ML/AI Developer',
      bio: 'Works across AI ethics and policy for transparent, human-centred high-stakes systems.',
    },
    {
      name: 'Jude Kong',
      session: 'Panel 1: Modelling with AI',
      role: 'Assistant Professor, School of Public Health @ UofT',
      bio: 'Researches machine learning and mathematical modelling for health and equity-focused applications.',
    },
    {
      name: 'Jeffrey Sun',
      session: 'Panel 1: Modelling with AI',
      role: 'Assistant Professor, Economics @ UofT',
      bio: 'Applies computational tools to economic modelling and rich equilibrium analysis.',
    },
    {
      name: 'Alex Mariakakis',
      session: 'Panel 1: Modelling with AI',
      role: 'Assistant Professor, Computer Science @ UofT',
      bio: 'Runs the Computational Health and Interaction lab, bridging ubiquitous computing and health applications.',
    },
  ]

  const day2Speakers: Person[] = [
    {
      name: 'David Liu',
      session: 'Panel 2: Embedded Ethics Education (E3I)',
      role: 'Associate Professor, Teaching Stream, CS @ UofT',
      bio: 'Teaching-stream faculty member with interests in educational technology and interdisciplinary computing.',
    },
    {
      name: 'Sheila McIlraith',
      session: 'Panel 2: Embedded Ethics Education (E3I)',
      role: 'Professor, CS @ UofT; Associate Director @ SRI; CIFAR AI Chair @ Vector',
      bio: 'Researches in knowledge representation, AI planning, and explainable AI with a focus on trustworthy systems.',
    },
    {
      name: 'Benjamin Sanchez-Lengeling',
      session: 'Talk 5: Scientific Discovery in the Age of AI Automation',
      role: 'Assistant Professor, ChemEng @ UofT',
      bio: 'Builds AI methods for scientific discovery and chemistry applications.',
    },
    {
      name: 'Nazy Thakkar',
      session: 'Workshop 2: VC 101: From Pitch to Partnership',
      role: 'Toronto GM @ Drive Capital',
      bio: 'Tracks and supports early-stage tech ventures, with a focus on inclusive innovation ecosystems.',
    },
    {
      name: 'Paolo Granata',
      session: 'Talk 6: AI and Epistemic Virtues',
      role: 'Associate Professor, St. Michael\'s College @ UofT',
      bio: 'Researches media, communication, and critical design approaches to technology and ethics.',
    },
    {
      name: 'Ramaravind Mothilal',
      session: 'Talk 7',
      role: 'PhD Candidate, Faculty of Information',
      bio: 'Explores AI systems and their societal implications through research grounded in human values.',
    },
    {
      name: 'Karen Young',
      session: 'Panel 3: Women in Computer Science Careers',
      role: 'Vice President of Transformation and Delivery @ FGF Brands',
      bio: 'Leads enterprise digital transformation and high-impact technology initiatives.',
    },
    {
      name: 'Feyisayo Enujuni',
      session: 'Panel 3: Women in Computer Science Careers',
      role: 'CEO, Denobiq Technologies Inc.',
      bio: 'Founded Denobiq to improve patient and hospital AI infrastructure workflows.',
    },
    {
      name: 'Christine Tang',
      session: 'Panel 3: Women in Computer Science Careers',
      role: 'AI Engineer @ Politte',
      bio: 'Builds enterprise generative AI and agent-based systems.',
    },
  ]

  const day1Guests: Guest[] = [
    {
      name: 'Amitiot Sandhu',
      role: 'Global Early Talent Acquisition @ Dayforce',
      bio: 'Leads co-op and new graduate hiring with a focus on meaningful career development and inclusive talent pipelines.',
    },
    {
      name: 'Alina Tang',
      role: 'Early Talent Recruiter @ Dayforce',
      bio: 'Supports internships and emerging professional talent pathways across technical teams.',
    },
    {
      name: 'Ramijha Puspanathan',
      role: 'Early Talent Recruiter @ Dayforce',
      bio: 'Helps students transition into early-career opportunities through internship and co-op programs.',
    },
    {
      name: 'Guest Name',
      role: 'AI and Dev Intern @ Dayforce',
      bio: 'Biography details to be announced.',
    },
    {
      name: 'Guest Name (TBA)',
      role: 'AI and Dev Intern @ Dayforce',
      bio: 'Biography details to be announced.',
    },
  ]

  const day2Guests: Guest[] = [
    {
      name: 'Dr. Eirene Seiradaki',
      role: 'RBC Borealis',
      bio: 'Leads delivery of collaborative AI and undergraduate AI programming initiatives.',
    },
    {
      name: 'Devesh Gupta',
      role: 'RBC Borealis',
      bio: 'Open networking guest and industry representative.',
    },
    {
      name: 'Karen Young',
      role: 'Vice President of Transformation and Delivery @ FGF Brands',
      bio: 'Drives enterprise strategy, digital innovation, and large-scale organizational transformation.',
    },
    {
      name: 'Nasrin Sabetypour',
      role: 'Pilates Body Maison',
      bio: 'Open networking guest.',
    },
    {
      name: 'Ryan Kelln',
      role: 'Software Artist',
      bio: 'Builds interactive installations and machine-learning-driven creative works with a public engagement focus.',
    },
    {
      name: 'Anthony Ukwu',
      role: 'Digital Excellence in Health @ Ontario Health',
      bio: 'Open networking guest with digital health leadership experience.',
    },
    {
      name: 'Bey Wang',
      role: 'Senior Manager, Digital Serve and Support Product @ Rogers',
      bio: 'Leads cross-functional teams delivering customer-centric wireless and residential digital products.',
    },
    {
      name: 'Boran Ocak',
      role: 'Founder @ Project Agro',
      bio: 'Open networking guest.',
    },
  ]

  const initials = (name: string) =>
    name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase()

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-16">
          <div id="intro" className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-italiana tracking-wide text-center">ABOUT US</h1>
            <div className="border-2 border-black p-6 md:p-8 space-y-5">
              <p className="font-caudex text-sm md:text-base leading-relaxed text-gray-900">
                IlluminAI is a University of Toronto student organization dedicated to fostering interdisciplinary collaboration
                and making AI ethics accessible to everyone, regardless of technical background.
              </p>
              <p className="font-caudex text-sm md:text-base leading-relaxed text-gray-900">
                Our founding in 2020 has brought together over 1000 people from diverse disciplines to explore the ethical
                and societal dimensions of AI, with participation from 42 cities and 11 countries worldwide.
              </p>
              <p className="font-caudex text-sm md:text-base leading-relaxed text-gray-900">
                We have hosted over 15 workshops and events, launched a magazine and video interview series, and continue to
                bridge science with arts, policy, and social impact.
              </p>
              <div className="border border-[#BF2929] bg-[#fff8f8] p-4">
                <p className="font-caudex text-sm md:text-base italic leading-relaxed text-center text-gray-900">
                  The UofT AI Ethics Conference will be held on the weekend of March 7-8, 2026, on the University of Toronto
                  campus in Bahen Centre of Technology.
                </p>
              </div>
            </div>
          </div>

          <div id="schedule" className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide">CONFERENCE SCHEDULE</h2>
            <div className="space-y-6">
              {schedule.map((block) => (
                <div key={block.day} className="border-2 border-black rounded-2xl p-5 md:p-6 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-3xl font-italiana tracking-wide">{block.day}</h3>
                    <p className="font-caudex text-base italic">{block.date}</p>
                  </div>
                  <div className="divide-y divide-black/20 border border-black/30 rounded-lg">
                    {block.items.map((item) => (
                      <div key={`${block.day}-${item.time}`} className="grid grid-cols-12 gap-3 p-3 md:p-4">
                        <p className="col-span-12 md:col-span-3 font-caudex text-sm md:text-base font-semibold">{item.time}</p>
                        <p className="col-span-12 md:col-span-9 font-caudex text-sm md:text-base leading-relaxed">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="day-1-speakers" className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide">DAY 1 SPEAKERS</h2>
            <div className="border-2 border-black p-4 md:p-6 space-y-4">
              {day1Speakers.map((speaker) => (
                <article key={speaker.name} className="border border-black/25 rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 shrink-0 rounded-full border border-black bg-[#f4f4f4] flex items-center justify-center font-italiana text-xl">
                      {initials(speaker.name)}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-3xl leading-none font-italiana">{speaker.name}</h3>
                      <p className="font-caudex text-sm font-semibold">{speaker.session}</p>
                      <p className="font-caudex text-sm">{speaker.role}</p>
                      <p className="font-caudex text-sm leading-relaxed">{speaker.bio}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="day-2-speakers" className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide">DAY 2 SPEAKERS</h2>
            <div className="border-2 border-black p-4 md:p-6 space-y-4">
              {day2Speakers.map((speaker) => (
                <article key={speaker.name} className="border border-black/25 rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 shrink-0 rounded-full border border-black bg-[#f4f4f4] flex items-center justify-center font-italiana text-xl">
                      {initials(speaker.name)}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-3xl leading-none font-italiana">{speaker.name}</h3>
                      <p className="font-caudex text-sm font-semibold">{speaker.session}</p>
                      <p className="font-caudex text-sm">{speaker.role}</p>
                      <p className="font-caudex text-sm leading-relaxed">{speaker.bio}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="networking-guests" className="space-y-6">
            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide">NETWORKING GUESTS</h2>

            <div className="space-y-3">
              <h3 className="text-2xl font-italiana tracking-wide">Day 1 Networking Guests</h3>
              <div className="border-2 border-black p-4 md:p-6 space-y-3">
                {day1Guests.map((guest) => (
                  <article key={guest.name} className="border border-black/25 rounded-xl p-4">
                    <h4 className="text-2xl font-italiana leading-none">{guest.name}</h4>
                    <p className="font-caudex text-sm mt-1 font-semibold">{guest.role}</p>
                    <p className="font-caudex text-sm mt-1 leading-relaxed">{guest.bio}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-italiana tracking-wide">Day 2 Networking Guests</h3>
            <p className="font-caudex text-sm italic">Open networking will occur during lunch.</p>
            <div className="border-2 border-black p-4 md:p-6 space-y-3">
              {day2Guests.map((guest) => (
                <article key={guest.name} className="border border-black/25 rounded-xl p-4">
                  <h4 className="text-2xl font-italiana leading-none">{guest.name}</h4>
                  <p className="font-caudex text-sm mt-1 font-semibold">{guest.role}</p>
                  <p className="font-caudex text-sm mt-1 leading-relaxed">{guest.bio}</p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
