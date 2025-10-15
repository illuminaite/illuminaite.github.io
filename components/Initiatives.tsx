import Link from 'next/link'

export default function Initiatives() {
  const initiatives = [
    {
      title: 'events',
      description: 'hybrid workshops, guest speaker sessions, and more',
      link: '/events',
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
    <div className="bg-black py-32 px-8" id="initiatives">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold mb-16 text-center gradient-text">
          our initiatives
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-gray-900/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-primary-light">
                {initiative.title}
              </h2>
              <p className="text-lg mb-8 text-primary-light/80 leading-relaxed">
                {initiative.description}
              </p>
              <div className="mt-auto">
                {initiative.isExternal ? (
                  <a
                    href={initiative.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-coral hover:bg-primary-salmon text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    {initiative.buttonText}
                  </a>
                ) : (
                  <Link
                    href={initiative.link}
                    className="inline-block bg-primary-coral hover:bg-primary-salmon text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
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
  )
}