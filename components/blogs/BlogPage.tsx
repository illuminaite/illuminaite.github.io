import { Blog } from '@/types/blog';

interface BlogPageProps {
    blog: Blog;
}

export default function BlogPage({ blog }: BlogPageProps) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <article className="prose prose-lg max-w-none">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                        <span className="mr-4">By {blog.author}</span>
                        <span className="mr-4">{blog.date}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{blog.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>
                
                <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br>') }}
                />
            </article>
        </div>
    );
}