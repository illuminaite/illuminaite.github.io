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
            {/*Title */}
            <div className="flex justify-between items-center max-w-[1440px] mx-auto px-20 pt-20 pb-16 gap-12">
                {/* Text Content */}
                <div className="flex flex-col items-start flex-1">
                    <h1
                        className="self-stretch text-white text-[130px] font-normal leading-normal"
                        style={{
                            fontFamily: 'Italiana, serif',
                            letterSpacing: '-2.6px',
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: '#000'
                        }}
                    >
                        illuminAI
                    </h1>
                    <p
                        className="self-stretch text-white text-2xl font-normal leading-[150%] mt-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Subheading that sets up content, shares more info about the website, or generally gets people psyched to keep scrolling.
                    </p>
                </div>

                {/* GIF */}
                <div
                    className="overflow-hidden rounded-lg"
                    style={{
                        width: '407px',
                        height: '407px',
                        flexShrink: 0,
                        aspectRatio: '1/1',
                        background: 'black'
                    }}
                >
                    <img
                        src={encodeURI('/images/balancing gif.gif')}
                        alt="Balancing animation"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-[1440px] mx-auto px-20 pb-24">
                <div
                    className="flex flex-wrap"
                    style={{
                        maxWidth: '1282px',
                        rowGap: '32px',
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
    );
}