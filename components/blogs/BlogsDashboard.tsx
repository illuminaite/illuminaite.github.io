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

            {/* Header Section */}
            <div className="bg-white">
                {/* Side borders container */}
                <div className="bg-black">
                    <div className="max-w-[1440px] mx-auto bg-black">
                        <div style={{ padding: '24px 60px' }}>
                            {/* illuminAI, AI ETHICS & SOCIETY, and Date */}
                            <div style={{
                                border: '2px solid white',
                                marginLeft: '-60px',
                                marginRight: '-60px',
                                paddingLeft: '60px',
                                paddingRight: '60px',
                                paddingTop: '24px',
                            }}>
                                <div className="flex justify-between items-end">
                                    {/* Left side: illuminAI and AI ETHICS & SOCIETY with red divider */}
                                    <div className="flex items-end" style={{ gap: '24px' }}>
                                        <h1
                                            style={{
                                                color: '#FFFFFF',
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
                                        {/* Vertical divider */}
                                        <div
                                            style={{
                                                width: '2px',
                                                height: '112px',
                                                background: '#FFFFFF',
                                                marginBottom: '2px'
                                            }}
                                        />
                                        <span
                                            style={{
                                                color: '#FFFFFF',
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
                                            color: '#FFFFFF',
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
                                        {new Date().toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }).toUpperCase()}
                                    </div>
                                </div>
                            </div>

                            {/* Tagline with double borders */}
                            <div className="relative" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
                                {/* Top thick border */}
                                <div
                                    style={{
                                        height: '5px',
                                        background: '#FFFFFF',
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
                                        background: '#FFFFFF',
                                        position: 'absolute',
                                        top: '8px',
                                        left: '-60px',
                                        right: '-60px'
                                    }}
                                />

                                <p
                                    style={{
                                        color: '#FFFFFF',
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
                                        background: '#FFFFFF',
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
                                        background: '#FFFFFF',
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
                        <p
                            style={{
                                color: '#FFFFFF',
                                fontFamily: 'Caudex, serif',
                                fontSize: '26px',
                                fontWeight: 400,
                                lineHeight: '1.2',
                                letterSpacing: '-0.52px',
                                margin: 0,
                                padding: '6px 0',
                                whiteSpace: 'wrap',
                            }}
                        >
                            Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling. 
                        </p>
                    </div>
                    {/* Right side: Image */}
                    <div className="w-1/2">
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