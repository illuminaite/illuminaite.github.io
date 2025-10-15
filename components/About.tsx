import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-black py-32 px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Image container */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 bg-gradient-to-br from-primary-salmon to-primary-coral rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/balancing gif.gif"
                alt="human balancing bags animated gif"
                width={300}
                height={300}
                className="rounded-xl"
                unoptimized
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-primary-light">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              our mission
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium mb-8 text-primary-light/80">
              find creative ways to intersect computer science and artificial intelligence 
              with any discipline out there (law, art, medicine...)
            </h2>
            <p className="text-lg mb-12 text-primary-light/70 leading-relaxed">
              we believe everyone, no matter what major, should have the liberty to use these powerful technologies efficiently and ethically. 
              we aim to lower the barriers of entry into the tech field through hosting accessible, hybrid events and growing a deeply connected
              online community.
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              our culture
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium mb-8 text-primary-light/80">
              collaborative, connected, laid back, rewarding, &amp; human
            </h2>
            <p className="text-lg text-primary-light/70 leading-relaxed">
              anyone is welcome to join us and become a &ldquo;lumen&rdquo;. whether you are an attendee at our workshops, guest speaker at our event, volunteer at our 
              competition, or member of our discord server, you contribute invaluably to the illuminaite community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}