import Image from 'next/image'

export default function Contact() {
  const testimonials = [
    {
      quote: 'A terrific piece of praise',
      name: 'Name',
      description: 'Description',
      image: '/images/person1.jpg',
    },
    {
      quote: 'A fantastic bit of feedback',
      name: 'Name',
      description: 'Description',
      image: '/images/person2.jpg',
    },
    {
      quote: 'A genuinely glowing review',
      name: 'Name',
      description: 'Description',
      image: '/images/person3.jpg',
    },
  ]

  return (
      <div className="bg-black py-32 px-8 font-inter" id="contact">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-16 text-white">
            what people are saying
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl p-8"
                >
                  <p className="text-lg font-medium mb-8 text-black">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.description}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}