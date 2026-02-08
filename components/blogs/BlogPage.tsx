'use client'

import { Blog } from '@/types/blog';
import { useState } from 'react';
import Link from 'next/link';

interface BlogPageProps {
    blog: Blog;
    relatedBlogs?: Blog[];
}

export default function BlogPage({ blog, relatedBlogs = [] }: BlogPageProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    // Show up to 3 related blogs (excluding current blog)
    const displayBlogs = relatedBlogs.filter(b => b.slug !== blog.slug).slice(0, 3);

    return (
        <>
            {/* Black Navbar */}
            <nav className="bg-black flex justify-center items-center sticky top-0 z-50" style={{ height: '80px' }}>
                <div className="flex justify-between items-center h-full w-full max-w-[1440px] px-12">
                    <Link
                        href="/"
                        className="text-white cursor-pointer no-underline flex items-center hover:opacity-80 transition-opacity"
                        style={{
                            fontFamily: 'Italiana, serif',
                            fontSize: '30px',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            letterSpacing: '-0.6px',
                            width: '111px',
                            height: '34px'
                        }}
                    >
                        illuminAI
                    </Link>

                    {/* Desktop menu - aligned to the right edge */}
                    <ul className="hidden lg:flex items-center list-none gap-8">
                        <li>
                            <Link
                                href="/#about"
                                className="text-white flex items-center justify-center transition-all duration-300 hover:opacity-80 uppercase"
                                style={{
                                    fontFamily: 'Italiana, serif',
                                    fontSize: '30px',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                    letterSpacing: '-0.6px',
                                    width: '93px',
                                    height: '34px'
                                }}
                            >
                                about
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/team"
                                className="text-white flex items-center justify-center transition-all duration-300 hover:opacity-80 uppercase"
                                style={{
                                    fontFamily: 'Italiana, serif',
                                    fontSize: '30px',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                    letterSpacing: '-0.6px',
                                    width: '93px',
                                    height: '34px'
                                }}
                            >
                                team
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blogs"
                                className="text-white flex items-center justify-center transition-all duration-300 hover:opacity-80 uppercase"
                                style={{
                                    fontFamily: 'Italiana, serif',
                                    fontSize: '30px',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                    letterSpacing: '-0.6px',
                                    width: '93px',
                                    height: '34px'
                                }}
                            >
                                archive
                            </Link>
                        </li>
                        <li>
                            <a
                                href="mailto:illuminaiteacademy@gmail.com"
                                className="flex justify-center items-center no-underline text-white uppercase"
                                style={{
                                    height: '38px',
                                    padding: '14px 24px',
                                    gap: '8px',
                                    borderRadius: '8px',
                                    background: '#8B0000',
                                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                                    fontFamily: 'Italiana, serif',
                                    fontSize: '19px',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                    letterSpacing: '-0.38px',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                contact us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Blog Header Section */}
            <div className="bg-white">
                {/* Black side borders container */}
                <div className="bg-black">
                    <div className="max-w-[1440px] mx-auto bg-white">
                        <div style={{ padding: '24px 60px' }}>
                            {/* illuminAI, AI ETHICS & SOCIETY, and Date */}
                            <div className="flex justify-between items-end" style={{ marginBottom: '8px' }}>
                                {/* Left side: illuminAI and AI ETHICS & SOCIETY with red divider */}
                                <div className="flex items-end" style={{ gap: '24px' }}>
                                    <h1
                                        style={{
                                            color: '#BF2929',
                                            fontFamily: 'Italiana, serif',
                                            fontSize: '120px',
                                            fontWeight: 400,
                                            lineHeight: '1',
                                            letterSpacing: '-2.4px',
                                            margin: 0,
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        illuminAI
                                    </h1>
                                    {/* Red vertical divider */}
                                    <div
                                        style={{
                                            width: '2px',
                                            height: '112px',
                                            background: '#8B0000',
                                            marginBottom: '2px'
                                        }}
                                    />
                                    <span
                                        style={{
                                            color: '#BF2929',
                                            fontFamily: 'Italiana, serif',
                                            fontSize: '45px',
                                            fontWeight: 400,
                                            lineHeight: '1',
                                            letterSpacing: '-0.9px',
                                            marginBottom: '8px',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        AI ETHICS & SOCIETY
                                    </span>
                                </div>

                                {/* Right side: Date - aligned to bottom */}
                                <div
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Caudex, serif',
                                        fontSize: '28px',
                                        fontWeight: 400,
                                        lineHeight: '1',
                                        letterSpacing: '-0.56px',
                                        textAlign: 'right',
                                        marginBottom: '8px',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }).toUpperCase()}
                                </div>
                            </div>

                            {/* Tagline with double borders */}
                            <div className="relative" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
                                {/* Top thick border */}
                                <div
                                    style={{
                                        height: '5px',
                                        background: '#000',
                                        position: 'absolute',
                                        top: 0,
                                        left: '-60px',
                                        right: '-60px'
                                    }}
                                />
                                {/* Top thin border */}
                                <div
                                    style={{
                                        height: '1px',
                                        background: '#000',
                                        position: 'absolute',
                                        top: '8px',
                                        left: '-60px',
                                        right: '-60px'
                                    }}
                                />

                                <p
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Caudex, serif',
                                        fontSize: '26px',
                                        fontWeight: 400,
                                        lineHeight: '1.2',
                                        letterSpacing: '-0.52px',
                                        margin: 0,
                                        padding: '6px 0',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    We bring curious people exploring interdisciplinary challenges of the ethics and societal impacts of AI, together.
                                </p>

                                {/* Bottom thin border */}
                                <div
                                    style={{
                                        height: '1px',
                                        background: '#000',
                                        position: 'absolute',
                                        bottom: '8px',
                                        left: '-60px',
                                        right: '-60px'
                                    }}
                                />
                                {/* Bottom thick border */}
                                <div
                                    style={{
                                        height: '5px',
                                        background: '#000',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: '-60px',
                                        right: '-60px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="bg-black">
                <div className="max-w-[1440px] mx-auto bg-white min-h-screen">
                    <article style={{ padding: '48px 60px' }}>
                        {/* Article Title */}
                        <h2
                            className="mb-8"
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
                        </h2>

                        {/* Subtitle/Excerpt */}
                        <p
                            className="mb-12"
                            style={{
                                alignSelf: 'stretch',
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

                        {/* Featured Image */}
                        {blog.image && (
                            <div
                                className="mb-12 overflow-hidden"
                                style={{
                                    width: '1359px',
                                    maxWidth: '100%',
                                    height: '650px',
                                    borderRadius: '8px',
                                    background: '#D3D3D3'
                                }}
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Date */}
                        {blog.date && (
                            <p
                                className="mb-8"
                                style={{
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '150%'
                                }}
                            >
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        )}

                        {/* Content */}
                        <div
                            style={{
                                width: '1359px',
                                maxWidth: '100%',
                                color: '#000',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '150%',
                                marginBottom: '300px'
                            }}
                            dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br>') }}
                        />

                        {/* Separator Line */}
                        <div
                            style={{
                                width: '100%',
                                height: '3px',
                                background: '#000',
                                marginBottom: '48px'
                            }}
                        />

                        {/* Read More Section */}
                        {displayBlogs.length > 0 && (
                            <section>
                                <h2
                                    className="mb-12"
                                    style={{
                                        width: '625px',
                                        color: '#000',
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '40px',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        lineHeight: '110%'
                                    }}
                                >
                                    Read More
                                </h2>

                                <div
                                    className="inline-flex items-start"
                                    style={{ gap: '32px' }}
                                >
                                    {displayBlogs.map((relatedBlog) => (
                                        <Link
                                            key={relatedBlog.slug}
                                            href={`/blogs/${relatedBlog.slug}`}
                                            className="flex flex-col gap-4 no-underline group"
                                            style={{ flex: '1 0 0', alignSelf: 'stretch' }}
                                        >
                                            <div
                                                className="rounded-lg overflow-hidden"
                                                style={{
                                                    width: "100%",
                                                    aspectRatio: "4 / 3",
                                                    background: "#F7F7F7",
                                                    position: "relative"
                                                }}
                                            >
                                                {relatedBlog.image ? (
                                                    <img
                                                        src={relatedBlog.image}
                                                        alt={relatedBlog.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                        No image
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3
                                                    className="line-clamp-2"
                                                    style={{
                                                        color: '#000',
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '20px',
                                                        fontWeight: 500,
                                                        lineHeight: '150%'
                                                    }}
                                                >
                                                    {relatedBlog.title}
                                                </h3>
                                                <p
                                                    style={{
                                                        color: '#828282',
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '20px',
                                                        fontWeight: 500,
                                                        lineHeight: '150%'
                                                    }}
                                                >
                                                    By {relatedBlog.author}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>
                </div>
            </div>
        </>
    );
}