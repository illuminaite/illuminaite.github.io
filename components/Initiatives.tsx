import Link from 'next/link'
import Image from 'next/image'

export default function Initiatives() {
  const initiatives = [
    {
      title: 'videos & interviews',
      description: 'Body text for whatever you\'d like to add more to the subheading.',
      link: '/events',
      image: '/images/animated logo.gif',
      alt: 'Videos and interviews',
    },
    {
      title: 'research & writing',
      description: 'Body text for whatever you\'d like to expand on the main point.',
      link: '/research',
      image: '/images/animated logo.gif',
      alt: 'Research and writing',
    },
    {
      title: 'AI ethics hackathon',
      description: 'Body text for whatever you\'d like to share more.',
      link: '/hackathon',
      image: '/images/animated logo.gif',
      alt: 'AI ethics hackathon',
    },
  ]

  return (
      <div className="bg-black py-32 px-8" id="initiatives">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-16 gradient-text">
            our initiatives
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
                <Link
                    key={index}
                    href={initiative.link}
                    className="block group"
                >
                  <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden">
                    <Image
                        src={initiative.image}
                        alt={initiative.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-white">
                    {initiative.title}
                  </h2>
                  <p className="text-base text-white/70">
                    {initiative.description}
                  </p>
                </Link>
            ))}
          </div>
        </div>
      </div>
  )
}