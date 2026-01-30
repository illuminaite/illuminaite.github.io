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
    <section id="collaborators" className="bg-white mx-8 pb-6">
      <div className="w-full px-[3vw] sm:px-10 lg:px-16 xl:px-20 space-y-6">
        {/* Title */}
        <h2 className="text-center text-5xl font-italiana tracking-wide">
          SOME PAST COLLABORATIONS &amp; SPONSORS
        </h2>

        {/* Single bordered box containing all sponsor logos */}
        <div className="border-2 border-black px-8 py-6 flex flex-wrap items-center justify-center gap-12">
          {SPONSORS.map(({ src, alt }) => (
            <div
              key={alt}
              className="relative h-16 flex items-center justify-center shrink-0"
            >
              <Image
                src={src}
                alt={alt}
                width={160}
                height={120}
                className="object-contain h-full grayscale"
              />
            </div>
          ))}
        </div>

        <div className="border-2 border-black px-8 py-6 flex flex-col gap-4">
            <span className="text-5xl font-italiana tracking-wide">
                WHAT PEOPLE ARE SAYING
            </span>
            <span className="text-3xl font-italiana tracking-wide">
                AI Ethics Hackathon 2025
            </span>
            <div className="text-xl font-caudex tracking-wide flex flex-col gap-4">
                <span>
                    "One of the best hackathons I've seen."
                </span>
                <span>
                    "Very fun opportunity to focus on concept rather than implementation."
                </span>
                <span>
                    "I enjoyed the general vibe. Other hackathons feel very stressful and sweaty, but this one was very pleasant."
                </span>
            </div>
            <span className="text-3xl font-italiana tracking-wide">
                TEAM
            </span>
            <div className="text-xl font-caudex tracking-wide flex flex-col gap-4">
                <span>
                    "The most non-CS CS club."
                </span>
                <span>
                    "AI ethics is an extremely important but underrecognized field, and I find it enticing that illuminAI advocates for it."
                </span>
                <span>
                    "An exceptional opportunity to distill my philosophy regarding AI, bearing particular concern towards AI ethics, safety, and alignment."
                </span>
            </div>
        </div>
      </div>
    </section>
  )
}
