export default function About() {
  const topDisciplines = [
    'engineering - computer science - philosophy - business - political science - mathematics - criminology'
  ]

  const bottomDisciplines = [
    'architecture - cinema studies - robotics - life science - biological chemistry - statistics - history - bioethics'
  ]

  return (
      <div className="bg-black py-32 font-inter" id="about">
        {/* Top disciplines scroll - full width */}
        <div className="mb-16 overflow-hidden px-8">
          <div className="flex gap-8 text-white/60 text-2xl whitespace-nowrap">
            {topDisciplines.map((discipline, index) => (
                <span key={index}>{discipline}</span>
            ))}
          </div>
        </div>

        {/* Main content - centered and constrained */}
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Our Mission */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                our mission
              </h1>
              <h2 className="text-xl mb-6 font-normal">
                find creative ways to intersect artificial intelligence (AI) ethics with any discipline out there
              </h2>
              <p className="text-base leading-relaxed text-white/90">
                we believe everyone, no matter what major, should have the liberty to use these powerful technologies efficiently and ethically. we aim to lower the barriers of entry into the tech field through hosting accessible, hybrid events and growing a deeply connected online community.
              </p>
            </div>

            {/* Our Culture */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                our culture
              </h1>
              <h2 className="text-xl mb-6 font-normal">
                collaborative, connected, laid back, rewarding, & human
              </h2>
              <p className="text-base leading-relaxed text-white/90">
                anyone is welcome to join us and become a "lumen". whether you are a dedicated team member, attendee at our workshops, guest speaker at our event, participant in our competition, or subscriber of our blog posts/YouTube channel, you contribute invaluably to the illuminAI community.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom disciplines scroll - full width */}
        <div className="overflow-hidden px-8">
          <div className="flex gap-8 text-white/60 text-2xl whitespace-nowrap">
            {bottomDisciplines.map((discipline, index) => (
                <span key={index}>{discipline}</span>
            ))}
          </div>
        </div>
      </div>
  )
}