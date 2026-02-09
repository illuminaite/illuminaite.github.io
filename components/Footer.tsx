import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link
              href="/"
              className="flex justify-center text-white text-xl font-medium cursor-pointer no-underline"
            >
              illuminAI
            </Link>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/company/illuminaite-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@illuminaiteacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/illuminaiteacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          </div>

          <nav className="grid grid-cols-3 gap-x-8 gap-y-2 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">About us</Link>
              <Link href="/construction" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">Archive</Link>
              <Link href="/team" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">Team</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/blogs" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">Articles</Link>
              <a href="https://medium.com/@illuminaiteacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">Medium</a>
              <a href="https://substack.com/@illuminai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">Substack</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://www.youtube.com/@illuminaiteacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">YouTube</a>
              <a href="https://discord.gg/8wUPFq2MVc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">Discord</a>
              <a href="mailto:illuminaiteacademy@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 no-underline text-sm">Contact us</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}