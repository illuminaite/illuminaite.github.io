import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  const articles = [
    {
      title: 'Subheading',
      description: 'Body text for whatever you\'d like to add more to the subheading.',
      link: '/article1',
      image: '/images/animated logo.gif',
      alt: 'Featured article 1',
    },
    {
      title: 'Subheading',
      description: 'Body text for whatever you\'d like to expand on the main point.',
      link: '/article2',
      image: '/images/animated logo.gif',
      alt: 'Featured article 2',
    },
  ]

  return (
      <div className=" py-32 px-8 font-inter" id="contact">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-16 text-black">
            featured articles
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
                <Link
                    key={index}
                    href={article.link}
                    className="block group"
                >
                  <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-black">
                    {article.title}
                  </h2>
                  <p className="text-base text-black/70">
                    {article.description}
                  </p>
                </Link>
            ))}
          </div>
        </div>
      </div>
  )
}