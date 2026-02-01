'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const windowWidth = window.innerWidth

            if (windowWidth > 960) {
                if (scrollPosition < 1400) {
                    setActiveSection('about')
                } else if (scrollPosition < 2345) {
                    setActiveSection('team')
                } else {
                    setActiveSection('')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMobileMenu = () => setIsMenuOpen(false)

    const scrollToSection = (sectionId: string) => {
        // If not on homepage, go there with hash
        if (pathname !== '/') {
            router.push(`/#${sectionId}`)
            closeMobileMenu()
            return
        }

        // Same page: smooth scroll
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        closeMobileMenu()
    }

    return (
        <nav className="bg-black h-20 flex justify-center items-center text-lg sticky top-0 z-50">
            <div className="flex justify-between items-center h-20 w-full max-w-7xl mx-auto px-12">
                {/* Brand */}
                <div className="text-white text-xl font-italiana cursor-default tracking-wider">
                    illuminAI
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className={`flex flex-col justify-around w-6 h-6 cursor-pointer transition-all duration-300 ${
                            isMenuOpen ? 'is-active' : ''
                        }`}
                    >
            <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
            />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                            }`}
                        />
                    </button>
                </div>

                {/* Desktop menu */}
                <ul className="hidden lg:flex items-center list-none uppercase tracking-wider">
                    <li className="h-20">
                        <Link
                            href="/about"
                            className={`font-italiana text-primary-light flex items-center justify-center w-32 h-full transition-all duration-300 ${
                                pathname === '/about'
                                    ? 'text-primary-coral'
                                    : 'hover:text-primary-coral'
                            }`}
                        >
                            ABOUT
                        </Link>
                    </li>

                    <li className="h-20">
                        <Link
                            href="/team"
                            className={`font-italiana text-primary-light flex items-center justify-center w-32 h-full transition-all duration-300 ${
                                pathname === '/team'
                                    ? 'text-primary-coral'
                                    : 'hover:text-primary-coral'
                            }`}
                        >
                            TEAM
                        </Link>
                    </li>

                    <li className="h-20">
                        <Link
                            href="/archive"
                            className="font-italiana text-primary-light flex items-center justify-center w-32 h-full hover:text-primary-coral transition-all duration-300"
                        >
                            ARCHIVE
                        </Link>
                    </li>

                    <li className="flex justify-center items-center px-4 h-20">
                        <a
                            href="mailto:illuminaiteacademy@gmail.com"
                            className="font-italiana flex justify-center items-center py-2.5 px-5 rounded bg-[#8B0000] text-white hover:bg-[#6F0000] transition-all duration-300 uppercase tracking-wider"
                        >
                            CONTACTS
                        </a>
                    </li>
                </ul>

                {/* Mobile menu */}
                <ul
                    className={`lg:hidden fixed top-20 left-0 w-full h-screen bg-black flex flex-col items-center pt-8 uppercase tracking-wider transition-all duration-300 ${
                        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    <li className="my-4">
                        <Link
                            href="/about"
                            onClick={closeMobileMenu}
                            className="font-italiana text-primary-light text-xl hover:text-primary-coral transition-all duration-300"
                        >
                            ABOUT
                        </Link>
                    </li>

                    <li className="my-4">
                        <button
                            onClick={() => scrollToSection('team')}
                            className="font-italiana text-primary-light text-xl hover:text-primary-coral transition-all duration-300"
                        >
                            TEAM
                        </button>
                    </li>

                    <li className="my-4">
                        <Link
                            href="/archive"
                            onClick={closeMobileMenu}
                            className="font-italiana text-primary-light text-xl hover:text-primary-coral transition-all duration-300"
                        >
                            ARCHIVE
                        </Link>
                    </li>

                    <li className="my-4">
                        <a
                            href="mailto:illuminaiteacademy@gmail.com"
                            onClick={closeMobileMenu}
                            className="font-italiana bg-[#8B0000] text-white py-2.5 px-5 rounded hover:bg-[#6F0000] transition-all duration-300"
                        >
                            CONTACTS
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
