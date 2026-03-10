import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
}

// Static blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: 'ai-visibility-2026-guide',
    title: 'How AI Search Visibility Works for Car Dealerships in 2026',
    date: 'March 10, 2026',
    excerpt: 'The way people find car dealerships is changing forever. Car buyers are no longer starting their search on Google. They are asking ChatGPT: "What\'s the best Toyota dealership near Oakville?" And if your dealership isn\'t in the AI\'s training data, you don\'t exist...',
    readingTime: '5 min read',
  },
  {
    slug: 'ai-visibility-guide',
    title: 'The Complete Guide to AI Visibility for Car Dealerships',
    date: 'March 1, 2026',
    excerpt: 'Learn how to optimize your dealership for AI search engines like ChatGPT, Perplexity, and Claude. Discover the strategies that put you in front of customers when they ask AI for recommendations...',
    readingTime: '8 min read',
  },
  {
    slug: 'rrf-algorithm-guide',
    title: 'Understanding the RRF Algorithm: How AI Ranks Local Businesses',
    date: 'February 28, 2026',
    excerpt: 'The RRF (Reciprocal Rank Fusion) algorithm determines which businesses AI recommends. Learn how it works and how to optimize your dealership\'s visibility score...',
    readingTime: '6 min read',
  },
];

export default function BlogPage() {
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
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-red-500 transition-colors"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-white mb-2 hover:text-red-500 transition-colors">
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
