export default function Hero() {
  return (
      <div className="bg-black text-white py-32 px-8 font-inter" id="home">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 animate-fade-in font-italiana">
            illuminAI
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light animate-slide-up font-italiana">
            exploring the ethics, intelligence, and impact of AI, together.
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg transition-colors duration-300">
            see more
          </button>
        </div>
      </div>
  )
}