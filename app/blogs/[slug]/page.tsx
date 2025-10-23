import { notFound } from 'next/navigation';
import BlogPage from '@/components/blogs/BlogPage';
import { Blog } from '@/types/blog';
import fs from 'fs';
import path from 'path';

interface BlogPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const blogsDirectory = path.join(process.cwd(), 'data/blogs');
    
    try {
        const files = fs.readdirSync(blogsDirectory);
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        
        return jsonFiles.map(file => ({
            slug: file.replace('.json', '')
        }));
    } catch (error) {
        console.error('Error reading blogs directory:', error);
        return [];
    }
}

async function getBlogBySlug(slug: string): Promise<Blog | null> {
    try {
        const filePath = path.join(process.cwd(), 'data/blogs', `${slug}.json`);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error(`Error reading blog ${slug}:`, error);
        return null;
    }
}

export default async function DynamicBlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    
    if (!blog) {
        notFound();
    }
    
    return <BlogPage blog={blog} />;
}
