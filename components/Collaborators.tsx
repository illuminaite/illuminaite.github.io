import Image from 'next/image'

const SPONSORS = [
  { src: '/images/sponsors/uoft.svg', alt: 'University of Toronto' },
  { src: '/images/sponsors/sap.svg', alt: 'SAP' },
  { src: '/images/sponsors/perplexity.svg', alt: 'Perplexity' },
  { src: '/images/sponsors/mit.svg', alt: 'MIT' },
  { src: '/images/sponsors/ibm.svg', alt: 'IBM' },
]

export default function Collaborators() {
  return (
    <section id="collaborators" className="bg-white mx-8">
      <div className="w-full px-[3vw] sm:px-10 lg:px-16 xl:px-20 space-y-6">
        {/* Title */}
        <h2 className="text-center text-4xl font-italiana tracking-wide">
          SOME PAST COLLABORATIONS &amp; SPONSORS
        </h2>

        {/* Single bordered box containing all sponsor logos */}
        <div className="border-2 border-black px-8 py-6 flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12">
          {SPONSORS.map(({ src, alt }) => (
            <div
              key={alt}
              className="relative h-16 sm:h-20 w-[100px] sm:w-[120px] flex items-center justify-center shrink-0"
            >
              <Image
                src={src}
                alt={alt}
                width={120}
                height={80}
                className="object-contain h-full grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
