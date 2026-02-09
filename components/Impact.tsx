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
    <div className="bg-black py-32 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-bold mb-16 gradient-text">
          impact
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-gray-800/50 border border-gray-700"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                {item.number}
              </h2>
              <p className="text-lg text-primary-light/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}