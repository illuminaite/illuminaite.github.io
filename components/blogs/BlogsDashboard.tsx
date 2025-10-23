import Link from 'next/link';
import { Blog } from '@/types/blog';
import fs from 'fs';
import path from 'path';

async function getAllBlogs(): Promise<Blog[]> {
    const blogsDirectory = path.join(process.cwd(), 'data/blogs');
    
    try {
        const files = fs.readdirSync(blogsDirectory);
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        
        const blogs = jsonFiles.map(file => {
            const filePath = path.join(blogsDirectory, file);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileContents);
        });
        
        // Sort blogs by date (newest first)
        return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
        console.error('Error reading blogs:', error);
        return [];
    }
}

export default async function BlogsDashboard() {
    const blogs = await getAllBlogs();
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-16 gradient-text">
                blogs
            </h1>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <Link 
                        key={blog.slug} 
                        href={`/blogs/${blog.slug}`}
                        className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                {blog.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>By {blog.author}</span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-1">
                                {blog.tags.slice(0, 3).map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            {blogs.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No blogs available yet.</p>
                </div>
            )}
        </div>
    );
}