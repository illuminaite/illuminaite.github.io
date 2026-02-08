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