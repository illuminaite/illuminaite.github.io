export default function Impact() {
  const impactData = [
    { number: '3', description: 'years since founding' },
    { number: '12', description: 'events hosted' },
    { number: '300+', description: 'participants of all ages...' },
    { number: '40+', description: '...from cities' },
    { number: '10+', description: 'and countries around the world' },
    { number: '15+', description: 'by dedicated team members' },
  ]

  return (
    <section className="bg-white" id="impact">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Title outside border to match About section style */}
        <h2 className="text-center text-4xl font-italiana tracking-wide mb-6">
          OUR IMPACT
        </h2>

        {/* Bordered content container */}
        <div className="border-2 border-black px-6 py-10 md:px-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactData.map((item, index) => (
              <div
                key={index}
                className="border border-black p-6 text-center"
              >
                <div className="text-5xl md:text-6xl font-inter leading-none">{item.number}</div>
                <div className="mt-2 text-xs tracking-wide">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}