import Link from 'next/link';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
}

function getBlogPosts(): BlogPost[] {
  const postsDirectory = join(process.cwd(), 'app/blog');
  const files = readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  
  const posts = files.map(file => {
    const slug = file.replace('.md', '');
    const fullPath = join(postsDirectory, file);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract excerpt from content (first 150 characters)
    const excerpt = content
      .replace(/^#.*$/m, '') // Remove title
      .replace(/\*\*/g, '') // Remove bold
      .replace(/\n/g, ' ')
      .trim()
      .slice(0, 150) + '...';
    
    return {
      slug,
      title: data.title || slug.replace(/-/g, ' '),
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt,
      readingTime: data.readingTime || '5 min read',
    };
  });
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getBlogPosts();
  
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Link href="/#faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Header */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">AI VISIBILITY </span>
            <span className="text-red-500">INSIGHTS</span>
          </h1>
          <p className="text-xl text-gray-400">
            Expert strategies for dominating AI search and growing your dealership
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-500 transition-colors"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-white mb-2 hover:text-red-500 transition-colors capitalize">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-red-500 font-semibold hover:text-red-400 transition-colors"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Dominate AI Search?
          </h2>
          <p className="text-gray-400 mb-8">
            Get your free AI visibility audit and see how you compare to competitors
          </p>
          <Link
            href="/#cta-form"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Get Free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
