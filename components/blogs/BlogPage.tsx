'use client'

import { Blog } from '@/types/blog';
import { useState } from 'react';
import Link from 'next/link';

interface BlogPageProps {
    blog: Blog;
}

export default function BlogPage({ blog }: BlogPageProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* White Navbar*/}
            <nav className="bg-white h-20 flex justify-center items-center text-lg sticky top-0 z-50">
                <div className="flex justify-between items-center h-20 z-10 w-full max-w-7xl mx-auto px-12">
                    <Link
                        href="/"
                        className="text-black text-xl font-medium cursor-pointer no-underline flex items-center hover:opacity-80 transition-opacity"
                    >
                        illuminaite
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className={`flex flex-col justify-around w-6 h-6 cursor-pointer transition-all duration-300 ${isMenuOpen ? 'is-active' : ''
                                }`}
                        >
                            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                                }`}></span>
                            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                                }`}></span>
                            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                                }`}></span>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <ul className="hidden lg:flex items-center list-none">
                        <li className="h-20">
                            <Link
                                href="/"
                                className="text-black flex items-center justify-center w-32 h-full transition-all duration-300 hover:text-primary-coral"
                            >
                                home
                            </Link>
                        </li>
                        <li className="h-20">
                            <Link
                                href="/#about"
                                className="text-black flex items-center justify-center w-32 h-full transition-all duration-300 hover:text-primary-coral"
                            >
                                about
                            </Link>
                        </li>
                        <li className="h-20">
                            <Link
                                href="/#initiatives"
                                className="text-black flex items-center justify-center w-32 h-full transition-all duration-300 hover:text-primary-coral"
                            >
                                initiatives
                            </Link>
                        </li>
                        <li className="h-20">
                            <Link
                                href="/events"
                                className="text-black flex items-center justify-center w-32 h-full hover:text-primary-coral transition-all duration-300"
                            >
                                events
                            </Link>
                        </li>
                        <li className="flex justify-center items-center px-4 w-full h-20">
                            <a
                                href="mailto:illuminaiteacademy@gmail.com"
                                className="flex justify-center items-center no-underline py-2.5 px-5 w-full border-none outline-none rounded bg-primary-coral text-primary-light hover:bg-primary-salmon transition-all duration-300"
                            >
                                contact us
                            </a>
                        </li>
                    </ul>

                    {/* Mobile menu */}
                    <ul className={`lg:hidden fixed top-20 left-0 w-full h-screen bg-white flex flex-col items-center justify-start pt-8 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}>
                        <li className="my-4">
                            <Link
                                href="/"
                                onClick={closeMobileMenu}
                                className="text-black text-xl hover:text-primary-coral transition-all duration-300"
                            >
                                home
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link
                                href="/#about"
                                onClick={closeMobileMenu}
                                className="text-black text-xl hover:text-primary-coral transition-all duration-300"
                            >
                                about
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link
                                href="/#initiatives"
                                onClick={closeMobileMenu}
                                className="text-black text-xl hover:text-primary-coral transition-all duration-300"
                            >
                                initiatives
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link
                                href="/events"
                                onClick={closeMobileMenu}
                                className="text-black text-xl hover:text-primary-coral transition-all duration-300"
                            >
                                events
                            </Link>
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

            {/* Blog Content */}
            <div className="bg-white min-h-screen">
                <article className="max-w-[1440px] mx-auto px-20 py-16">
                    <header className="mb-12">
                        {/* Title */}
                        <h1
                            className="mb-6"
                            style={{
                                color: '#000',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '64px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '-1.28px'
                            }}
                        >
                            {blog.title}
                        </h1>

                        {/* Subtitle */}
                        <p
                            className="self-stretch mb-8"
                            style={{
                                color: 'rgba(0, 0, 0, 0.75)',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '150%'
                            }}
                        >
                            {blog.excerpt}
                        </p>

                        {/* Author and date */}
                        <div
                            className="flex items-center gap-4 mb-8"
                            style={{
                                color: 'rgba(0, 0, 0, 0.75)',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400
                            }}
                        >
                            <span>By {blog.author}</span>
                            <span>•</span>
                            <span>{blog.date}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full text-sm"
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        color: '#000',
                                        fontFamily: 'Inter, sans-serif'
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Featured Image */}
                    {blog.image && (
                        <div
                            className="mb-12 mx-auto overflow-hidden"
                            style={{
                                width: '1281px',
                                height: '650px',
                                flexShrink: 0,
                                borderRadius: '8px',
                                maxWidth: '100%'
                            }}
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div
                        className="mx-auto"
                        style={{
                            width: '842px',
                            maxWidth: '100%',
                            color: '#000',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '150%'
                        }}
                        dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br>') }}
                    />
                </article>
            </div>
        </>
    );
}