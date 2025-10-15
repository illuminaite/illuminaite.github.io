import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Events | illuminaite academy',
  description: 'Explore our hybrid workshops, guest speaker sessions, competitions and more. Join our community of interdisciplinary learners.',
}

interface EventCard {
  title: string
  date: string
  description?: string
  link: string
  linkText: string
}

const previousEvents: EventCard[] = [
  {
    title: 'Dr. Steven Coyne: AI Ethics',
    date: 'May 28, 2024',
    description: 'ethical implications of anthropomorphism',
    link: 'https://www.instagram.com/p/C4EdoB_RyKx/',
    linkText: 'impact report'
  },
  {
    title: 'Amit Sethi: IBM Cloud Computing',
    date: 'May 28, 2024',
    link: 'https://www.instagram.com/p/C2_GopCRjfA/?img_index=3',
    linkText: 'impact report'
  },
  {
    title: 'Canadian AI Competition',
    date: 'May 28, 2022',
    link: 'https://www.instagram.com/p/CfZ21IDPZG8/?img_index=1',
    linkText: 'impact report'
  },
  {
    title: 'Dr. Yasutaka Furukawa: Computer Vision',
    date: 'December 21, 2021',
    link: 'https://www.instagram.com/p/CXueYReJbTi/?img_index=1',
    linkText: 'recap post'
  },
  {
    title: 'AI & Facial Recognition Workshops',
    date: 'October 23, 2021',
    description: 'our first in-person event! (had virtual occurrence too)',
    link: 'https://docs.google.com/document/d/15086FZ9nXJVNtVVK-HdC-SE51K0rWJLG7IpQlcL3QKc/edit?usp=sharing',
    linkText: 'impact report'
  },
  {
    title: 'Canadian AI Ethics Competition',
    date: 'June 26, 2021',
    link: 'https://www.instagram.com/p/CQ9Gk0tjF1g/?img_index=1',
    linkText: 'impact report'
  },
  {
    title: 'AI & ethics workshop',
    date: 'May 29, 2021',
    link: 'https://docs.google.com/document/d/1q1YnDpKFjEV61Ho4U2hrlYIZmD-H-Apog-1xGNVkH3A/edit?usp=sharing',
    linkText: 'impact report'
  },
  {
    title: 'AI & the environment workshop',
    date: 'April 17, 2021',
    description: 'featuring Océane Boulais',
    link: 'https://docs.google.com/document/d/1KqwfU7uFqAt2Tn4zHADyLqEFuJL9bNOVAG4xrB7xvz0/edit',
    linkText: 'impact report'
  },
  {
    title: 'AI & covid-19 workshop',
    date: 'February 27-28, 2021',
    link: 'https://docs.google.com/document/d/1t9N6ViXfkdoy_vJCbIZfSB_oTfPZTXf8cmaclPounaE/edit?usp=sharing',
    linkText: 'impact report'
  },
  {
    title: 'AI & drawing workshop',
    date: 'January 23, 2021',
    link: 'https://docs.google.com/document/d/11PcDDaNJH-cgbhLa0bP24KVjolqcCyILk4Pmu9LyKpo/edit?usp=sharing',
    linkText: 'impact report'
  }
]

function EventsNavbar() {
  return (
    <nav className="bg-black h-20 flex justify-center items-center text-lg sticky top-0 z-50">
      <div className="flex justify-between items-center h-20 z-10 w-full max-w-7xl mx-auto px-12">
        <Link
          href="/"
          className="gradient-text text-xl font-medium cursor-pointer no-underline flex items-center"
        >
          illuminaite
        </Link>

        <ul className="flex items-center list-none space-x-8">
          <li>
            <a
              href="#upcoming"
              className="text-primary-light hover:text-primary-coral transition-all duration-300"
            >
              upcoming
            </a>
          </li>
          <li>
            <a
              href="#previous"
              className="text-primary-light hover:text-primary-coral transition-all duration-300"
            >
              previous
            </a>
          </li>
          <li>
            <a
              href="https://forms.gle/RbNFzHfAVXdLhvXn9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-coral hover:bg-primary-salmon text-white px-5 py-2 rounded transition-colors duration-300"
            >
              register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function EventCard({ event }: { event: EventCard }) {
  return (
    <div className="bg-gray-900/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
      <h2 className="text-xl font-bold mb-2 text-primary-light">{event.title}</h2>
      <p className="text-primary-coral font-medium mb-2">{event.date}</p>
      {event.description && (
        <p className="text-primary-light/80 mb-4">{event.description}</p>
      )}
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary-coral hover:bg-primary-salmon text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
      >
        {event.linkText}
      </a>
    </div>
  )
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black">
      <EventsNavbar />
      
      {/* Hero Section */}
      <div className="bg-black text-primary-light py-24 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="gradient-text">events</span>
          </h1>
          <div className="text-lg lg:text-xl text-primary-light/90 mb-8">
            <p>&gt; we host workshops, guest speakers, and competitions</p>
            <p>&gt; held at our various branch locations and online!</p>
          </div>
          <a
            href="https://forms.gle/RbNFzHfAVXdLhvXn9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-coral hover:bg-primary-salmon text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
          >
            join our mailing list
          </a>
        </div>
      </div>

      {/* Upcoming Section */}
      <div className="bg-black py-24 px-8" id="upcoming">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">
            upcoming events
          </h1>
          <p className="text-xl text-primary-light/80">
            coming soon in Fall 2024...
          </p>
        </div>
      </div>

      {/* Previous Events Section */}
      <div className="bg-black py-24 px-8" id="previous">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-16 text-center gradient-text">
            previous events
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}