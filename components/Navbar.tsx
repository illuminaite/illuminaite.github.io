'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isTeamSection, setIsTeamSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowWidth = window.innerWidth

      if (windowWidth > 960) {
        if (scrollPosition < 600) {
          setActiveSection('home')
          setIsTeamSection(false)
        } else if (scrollPosition < 1400) {
          setActiveSection('about')
          setIsTeamSection(false)
        } else if (scrollPosition < 2345) {
          setActiveSection('initiatives')
          setIsTeamSection(false)
        } else if (scrollPosition < 3000) {
          setActiveSection('team')
          setIsTeamSection(true)
        } else {
          setActiveSection('')
          setIsTeamSection(true)  // Changed from false to true
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMobileMenu()
  }

  return (
      <nav className=" h-20 flex justify-center items-center text-lg sticky top-0 z-50">
        <div className="flex justify-between items-center h-20 z-10 w-full px-8">
          <button
              onClick={() => scrollToSection('home')}
              className={`${isTeamSection ? 'text-black' : 'text-white'} text-xl font-medium cursor-pointer no-underline flex items-center transition-colors duration-300`}
          >
            illuminAI
          </button>

        {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
                onClick={toggleMobileMenu}
                className={`flex flex-col justify-around w-6 h-6 cursor-pointer transition-all duration-300 ${
                    isMenuOpen ? 'is-active' : ''
                }`}
            >
            <span className={`block w-6 h-0.5 ${isTeamSection ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}></span>
              <span className={`block w-6 h-0.5 ${isTeamSection ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 ${isTeamSection ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </button>
          </div>

        {/* Desktop menu */}
          <ul className={`hidden lg:flex items-center list-none`}>
            <li className="h-20">
              <button
                  onClick={() => scrollToSection('about')}
                  className={`flex items-center justify-center w-32 h-full transition-all duration-300 ${
                      isTeamSection ? 'text-black hover:text-black' : (activeSection === 'about' ? 'text-primary-coral' : 'text-primary-light hover:text-primary-coral')
                  }`}
              >
                about
              </button>
            </li>
            <li className="h-20">
              <button
                  onClick={() => scrollToSection('initiatives')}
                  className={`flex items-center justify-center w-32 h-full transition-all duration-300 ${
                      isTeamSection ? 'text-black hover:text-black' : (activeSection === 'initiatives' ? 'text-primary-coral' : 'text-primary-light hover:text-primary-coral')
                  }`}
              >
                initiatives
              </button>
            </li>
            <li className="h-20">
              <button
                  onClick={() => scrollToSection('team')}
                  className={`flex items-center justify-center w-32 h-full transition-all duration-300 ${
                      isTeamSection ? 'text-black hover:text-black' : (activeSection === 'team' ? 'text-primary-coral' : 'text-primary-light hover:text-primary-coral')
                  }`}
              >
                team
              </button>
          </li>
          <li className="flex justify-center items-center px-4 w-full h-20">
            <a
              href="mailto:illuminaiteacademy@gmail.com"
              className="flex justify-center items-center no-underline py-2.5 px-5 w-full border-none outline-none rounded bg-primary-coral text-primary-light hover:bg-primary-salmon transition-all duration-300"
            >
              contact
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
          <ul className={`lg:hidden fixed top-20 left-0 w-full h-screen bg-black flex flex-col items-center justify-start pt-8 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <li className="my-4">
              <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-light text-xl hover:text-primary-coral transition-all duration-300"
              >
              about
              </button>
            </li>
            <li className="my-4">
              <button
                  onClick={() => scrollToSection('initiatives')}
                  className="text-primary-light text-xl hover:text-primary-coral transition-all duration-300"
              >
                initiatives
              </button>
            </li>
            <li className="my-4">
              <button
                  onClick={() => scrollToSection('team')}
                  className="text-primary-light text-xl hover:text-primary-coral transition-all duration-300"
              >
              team
            </button>
          </li>
          <li className="my-4">
            <a
              href="mailto:illuminaiteacademy@gmail.com"
              onClick={closeMobileMenu}
              className="bg-primary-coral text-primary-light py-2.5 px-5 rounded hover:bg-primary-salmon transition-all duration-300"
            >
              contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}