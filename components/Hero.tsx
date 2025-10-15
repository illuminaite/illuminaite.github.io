export default function Hero() {
  return (
    <div className="bg-black text-primary-light py-32 px-8" id="home">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
          <span className="gradient-text">illuminaite</span>{' '}
          <span className="text-primary-light">academy</span>
        </h1>
        <div className="text-lg md:text-xl lg:text-2xl text-primary-light/90 font-light animate-slide-up">
          <p>&gt; demystifying the world of CS &amp; AI</p>
          <p>
            &gt; building a network of interdisciplinary <br />
            &nbsp;&nbsp;&nbsp;students &amp; opportunities
          </p>
        </div>
      </div>
    </div>
  )
}