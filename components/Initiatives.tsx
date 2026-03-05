import Link from 'next/link'

export default function Initiatives() {
  const initiatives = [
    {
      title: 'events',
      description: 'hybrid workshops, guest speaker sessions, and more',
      link: '/events#upcoming',
      buttonText: 'see events',
      isExternal: false,
    },
    {
      title: 'canadian AI competition',
      description: 'our signature, annual event focusing on ai ethics',
      link: '/construction',
      buttonText: 'learn more',
      isExternal: false,
    },
    {
      title: 'community',
      description: 'join our discord server and connect with other Lumens',
      link: 'https://discord.gg/Anf6JcDyNt',
      buttonText: 'join community',
      isExternal: true,
    },
    {
      title: 'content creation',
      description: 'we post engaging and informative content on instagram',
      link: 'https://www.instagram.com/illuminaiteacademy/',
      buttonText: 'instagram page',
      isExternal: true,
    },
  ]

  return (
    <section className="bg-white" id="team">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Title outside border to match About section style */}
        <h2 className="text-center text-4xl font-italiana tracking-wide mb-6">
          OUR INITIATIVES
        </h2>

        {/* Bordered content container */}
        <div className="border-2 border-black px-6 py-10 md:px-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="border border-black p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-italiana tracking-wide mb-2">
                    {initiative.title}
                  </h3>
                  <p className="font-caudex text-sm leading-relaxed mb-6">
                    {initiative.description}
                  </p>
                </div>
                <div>
                  {initiative.isExternal ? (
                    <a
                      href={initiative.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-black py-2.5 px-5 hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      {initiative.buttonText}
                    </a>
                  ) : (
                    <Link
                      href={initiative.link}
                      className="inline-block border border-black py-2.5 px-5 hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      {initiative.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}