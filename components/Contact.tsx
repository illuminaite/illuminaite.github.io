import Image from 'next/image'

export default function Contact() {
  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Title outside border to match About section style */}
        <h2 className="text-center text-4xl font-italiana tracking-wide mb-6">
          CONTACT
        </h2>

        {/* Bordered content container */}
        <div className="border-2 border-black px-6 py-10 md:px-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* Left: Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-italiana tracking-wide mb-4">
                don&rsquo;t be a stranger~
              </h3>
              <p className="font-caudex text-sm leading-relaxed mb-4">
                say hi, ask a question, collaborate with us, join our team...
              </p>
              <p className="font-caudex text-sm leading-relaxed mb-8">
                use the button below to send us an email, or reach us through instagram direct messages too.
              </p>
              <a
                href="mailto:illuminaiteacademy@gmail.com"
                className="inline-block border border-black py-2.5 px-5 hover:bg-black hover:text-white transition-colors duration-200"
              >
                shoot us an email
              </a>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 border border-black flex items-center justify-center">
                <Image
                  src="/images/animated logo.gif"
                  alt="The Lumens animated logo"
                  width={300}
                  height={300}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
