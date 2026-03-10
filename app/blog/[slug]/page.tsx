import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

function getPostData(slug: string) {
  try {
    const postsDirectory = join(process.cwd(), 'app/blog');
    const fullPath = join(postsDirectory, `${slug}.md`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML (basic conversion)
    const htmlContent = content
      .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-6">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-red-500">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-red-500 hover:underline">$1</a>')
      .replace(/^- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-gray-300">')
      .replace(/^([^<].*)/gim, '<p class="mb-4 text-gray-300">$1</p>');
    
    return {
      title: data.title || slug.replace(/-/g, ' '),
      date: data.date || new Date().toISOString().split('T')[0],
      readingTime: data.readingTime || '5 min read',
      content: htmlContent,
    };
  } catch {
    return null;
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostData(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-red-500 text-3xl">⚡</span>
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">VIZ</span>
                <span className="text-red-500">BIZ</span>
              </span>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="text-red-500 hover:text-red-400 mb-8 inline-block"
          >
            ← Back to Blog
          </Link>
          
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          
          {/* Content */}
          <div
            className="prose prose-invert prose-red max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Improve Your AI Visibility?
            </h3>
            <p className="text-gray-400 mb-6">
              Get a free audit of your dealership's AI search presence and discover exactly how to outrank competitors.
            </p>
            <Link
              href="/#cta-form"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors inline-block"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const { readdirSync } = require('fs');
  const { join } = require('path');
  
  const postsDirectory = join(process.cwd(), 'app/blog');
  const files = readdirSync(postsDirectory).filter((file: string) => file.endsWith('.md'));
  
  return files.map((file: string) => ({
    slug: file.replace('.md', ''),
  }));
}
