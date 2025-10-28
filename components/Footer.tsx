'use client'

import Link from 'next/link'

export default function Footer() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="flex items-start">
                    {/* Logo and social icons */}
                    <div className="w-2/3 flex flex-col justify-between h-full">
                        <Link
                            href="/"
                            className="text-black text-xl font-medium cursor-pointer no-underline block mb-6"
                        >
                            illuminAI
                        </Link>
                        <div className="flex space-x-4 text-gray-600">
                            <a
                                href="https://www.linkedin.com/company/70560686"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900 transition-colors duration-300"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900 transition-colors duration-300"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/illuminaiteacademy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900 transition-colors duration-300"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-1/3 flex gap-24">
                    {/* Column 1 */}
                    <div>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    about us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('initiatives')}
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    initiatives
                                </button>
                            </li>
                            <li>
                                <Link
                                    href="/events"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/team"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    team
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    site blog
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://medium.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    medium
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://substack.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    substack
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    youtube
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/join"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    join us
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:illuminaiteacademy@gmail.com"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    contact us
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/sponsorships"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    sponsorships
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faqs"
                                    className="text-black hover:text-gray-600 transition-colors duration-300 text-sm"
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
