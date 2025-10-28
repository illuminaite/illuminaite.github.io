export default function Impact() {
  const impactData = [
    { number: '5', description: 'years since founding' },
    { number: '16', description: 'events hosted' },
    { number: '1000+', description: 'participants' },
    { number: '42', description: 'from cities' },
    { number: '12', description: '... and countries worldwide' },
    { number: '27', description: 'dedicated team members' },
  ]

  return (
      <div className="py-32 px-8 font-inter" id="team">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-16 text-white">
            our impact
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-20">
            {impactData.map((item, index) => (
                <div
                    key={index}
                    className="text-center"
                >
                  <h2 className="text-7xl lg:text-8xl font-light mb-4 text-primary-coral">
                    {item.number}
                  </h2>
                  <p className="text-base text-white/90">
                    {item.description}
                  </p>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}