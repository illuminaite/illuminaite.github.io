import Link from 'next/link';
import { Blog } from '@/types/blog';
import fs from 'fs';
import path from 'path';

async function getAllBlogs(): Promise<Blog[]> {
    // get all blogs from the data/blogs directory
    const blogsDirectory = path.join(process.cwd(), 'data/blogs');

    try {
        const files = fs.readdirSync(blogsDirectory);
        const jsonFiles = files.filter(file => file.endsWith('.json'));

        const blogs = jsonFiles.map(file => {
            const filePath = path.join(blogsDirectory, file);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileContents);
        });

        // sort blogs by date (newest first)
        return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
        console.error('Error reading blogs:', error);
        return [];
    }
}

export default async function BlogsDashboard() {
    const blogs = await getAllBlogs();

    return (
        <div className="bg-black min-h-screen">

            {/* Header Section - same structure as Header.tsx, white-on-black */}
            <div className="bg-black">
                <div className="max-w-[1440px] mx-auto bg-black relative z-10 pt-8 overflow-hidden">
                    <div className="flex justify-between items-baseline w-full px-4 md:px-8">
                        {/* Left: illuminAI + divider + AI, ETHICS & SOCIETY */}
                        <div className="flex items-baseline gap-2">
                            <h1
                                className="font-italiana font-light tracking-tight text-white"
                                style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
                            >
                                illuminAI
                            </h1>
                            <div className="h-12 w-px bg-white/30 shrink-0" />
                            <p
                                className="hidden md:block text-white font-italiana tracking-wide"
                                style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
                            >
                                AI, ETHICS <span className="text-white">&</span> SOCIETY
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-white font-caudex uppercase px-4 md:px-8">
                            {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }).toUpperCase()}
                        </p>
                    </div>

                    {/* Tagline with double borders (same as Header) */}
                    <div className="mt-2 relative w-full">
                        <div className="border-t-[3px] border-white absolute top-0 left-0 right-0" />
                        <div className="border-t border-white absolute top-1 left-0 right-0" />
                        <div className="py-3">
                            <p className="text-base md:text-lg text-white leading-relaxed font-light font-caudex px-4 md:px-8">
                                We bring curious people exploring interdisciplinary challenges of the ethics and societal impacts of AI,
                                together.
                            </p>
                        </div>
                        <div className="border-b border-white absolute bottom-1 left-0 right-0" />
                        <div className="border-b-[3px] border-white absolute bottom-0 left-0 right-0" />
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto mt-[-25px]">
                <div style={{ border: '2px solid white' }}>
                    {/* Articles Title and Image Section */}
                    <div className="px-20 py-24">
                <div className="flex w-full">
                    {/* Left side: Articles Title */}
                    <div className="w-1/2 flex flex-col justify-left">
                        <h2
                            style={{
                                color: '#FFFFFF',
                                fontFamily: 'Italiana, serif',
                                fontSize: '120px',
                                fontWeight: 400,
                                lineHeight: '1',
                                letterSpacing: '-2.4px',
                                margin: 0,
                                textTransform: 'lowercase'
                            }}
                        >
                            articles
                        </h2>
                    </div>
                    {/* Right side: Image */}
                    <div className="w-1/2 hidden md:block">
                        <img
                            src="/images/blogs_dashboard_image.png"
                            alt="Blogs Dashboard"
                            className="w-[80%] h-full object-cover mx-auto"
                        />
                    </div>
                </div>
            </div>

                    {/* Blog Grid */}
                <div className="px-20 pb-24">
                <div
                    className="flex flex-wrap"
                    style={{
                        maxWidth: '1282px',
                        rowGap: '96px',
                        columnGap: '32px',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        alignContent: 'flex-start'
                    }}
                >
                    {blogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/blogs/${blog.slug}`}
                            className="flex flex-col items-start group"
                            style={{
                                width: '404px',
                                height: '366px',
                                gap: '24px',
                                flexShrink: 0
                            }}
                        >
                            {/* Blog Image */}
                            <div
                                className="bg-gray-800 overflow-hidden rounded-lg"
                                style={{
                                    height: '238px',
                                    width: '100%',
                                    flexShrink: 0
                                }}
                            >
                                {blog.image ? (
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                                        No image
                                    </div>
                                )}
                            </div>

                            {/* Blog Content */}
                            <div
                                className="flex flex-col items-start w-full"
                                style={{
                                    gap: '4px',
                                    flexShrink: 0
                                }}
                            >
                                <h2
                                    className="line-clamp-2 group-hover:opacity-80 transition-opacity"
                                    style={{
                                        color: '#FFF',
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '150%'
                                    }}
                                >
                                    {blog.title}
                                </h2>
                                <p
                                    className="line-clamp-2"
                                    style={{
                                        color: '#828282',
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '150%'
                                    }}
                                >
                                    {blog.excerpt}
                                </p>
                                <div
                                    style={{
                                        color: '#828282',
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '150%'
                                    }}
                                >
                                    By {blog.author}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                        {/* Shows if there are no blogs available yet */}
                        {blogs.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">No blogs available yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}