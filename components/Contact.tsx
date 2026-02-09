import Image from 'next/image'

export default function Contact() {
  return (
    <div className="bg-black py-32 px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
          {/* Content */}
          <div className="flex-1 text-primary-light">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              don&rsquo;t be a stranger~
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium mb-8 text-primary-light/90">
              say hi, ask a question, collaborate with us, join our team...
            </h2>
            <p className="text-lg mb-12 text-primary-light/80 leading-relaxed">
              use the button below to send us an email, or reach us through instagram direct messages too (to @illuminaiteacademy)
            </p>
            <a
              href="mailto:illuminaiteacademy@gmail.com"
              className="inline-block bg-primary-coral hover:bg-primary-salmon text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
            >
              shoot us an email
            </a>
          </div>

          {/* Image container */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 bg-gradient-to-br from-primary-salmon to-primary-coral rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/animated logo.gif"
                alt="illuminaite animated logo"
                width={300}
                height={300}
                className="rounded-xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}