import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link
              href="/"
              className="gradient-text text-xl font-medium cursor-pointer no-underline"
            >
              illuminaite
            </Link>
          </div>
          
          <p className="text-primary-light/60 text-center mb-8 md:mb-0">
            © illuminaite 2023. All rights reserved
          </p>
          
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/illuminaiteacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary-coral transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <Link
              href="/construction"
              className="text-primary-light hover:text-primary-coral transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <a
              href="https://www.linkedin.com/company/70560686"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-primary-coral transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}