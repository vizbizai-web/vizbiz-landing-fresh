import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  content: string;
}

// Static blog posts data
const blogPosts: Record<string, BlogPost> = {
  'ai-visibility-2026-guide': {
    slug: 'ai-visibility-2026-guide',
    title: 'How AI Search Visibility Works for Car Dealerships in 2026',
    date: 'March 10, 2026',
    readingTime: '5 min read',
    content: `
      <h2>The Shift Nobody&apos;s Talking About</h2>
      <p>Car buyers are no longer starting their search on Google.</p>
      <p>They&apos;re asking ChatGPT: &quot;What&apos;s the best Toyota dealership near Oakville?&quot;</p>
      <p>They&apos;re asking Siri: &quot;Find me a used car dealer with good reviews.&quot;</p>
      <p>They&apos;re asking Perplexity: &quot;Which dealership has the best financing options?&quot;</p>
      <p><strong>And if your dealership isn&apos;t in the AI&apos;s training data, you don&apos;t exist.</strong></p>
      
      <h2>Why Traditional SEO Isn&apos;t Enough</h2>
      <p>For 20 years, dealerships focused on keywords, Google Ads, and review generation. That worked when humans browsed search results. But AI doesn&apos;t browse. <strong>It synthesizes.</strong></p>
      <p>When ChatGPT recommends a dealership, it doesn&apos;t show a list of 10 options. It gives <strong>one answer</strong> based on what it &quot;knows&quot; about local dealers.</p>
      <p><strong>The question is: does it know about you?</strong></p>
      
      <h2>The New Visibility Game</h2>
      <p>AI systems learn about businesses from:</p>
      <ul>
        <li><strong>Citations</strong> - Mentions across the web (directories, articles, press)</li>
        <li><strong>Reviews</strong> - Sentiment and volume across platforms</li>
        <li><strong>Content</strong> - Blog posts, videos, thought leadership</li>
        <li><strong>Consistency</strong> - Same name, address, phone everywhere</li>
        <li><strong>Authority</strong> - Backlinks from trusted sources</li>
      </ul>
      
      <h2>Real-World Impact</h2>
      <p>We tested 50 dealerships in the Toronto area:</p>
      <ul>
        <li>Average AI Visibility Score: <strong>12/100</strong></li>
        <li>Industry Leader: <strong>87/100</strong></li>
        <li>The dealership with 87/100 gets <strong>4x more &quot;AI referrals&quot;</strong> than average</li>
      </ul>
      
      <h2>What We Do at Vizbiz</h2>
      <p>We make dealerships <strong>AI-discoverable</strong> through:</p>
      <ul>
        <li><strong>Citation Building</strong> - Submit to 50+ high-authority directories</li>
        <li><strong>Review Strategy</strong> - Multi-platform review generation</li>
        <li><strong>Content Engine</strong> - Weekly blog posts targeting AI queries</li>
        <li><strong>Authority Building</strong> - Guest posts on automotive sites</li>
        <li><strong>Monitoring</strong> - Track AI visibility score monthly</li>
      </ul>
      
      <h2>The 90-Day Transformation</h2>
      <p><strong>Month 1:</strong> Foundation - Audit, fix NAP inconsistencies, build 20 citations</p>
      <p><strong>Month 2:</strong> Expansion - 30 more citations, launch content calendar, review campaign</p>
      <p><strong>Month 3:</strong> Dominance - 50+ citations, weekly content, AI visibility score 75+/100</p>
      
      <h2>Why This Matters Now</h2>
      <p><strong>2024:</strong> Early adopters started optimizing for AI</p>
      <p><strong>2025:</strong> AI search became mainstream</p>
      <p><strong>2026:</strong> AI recommendations drive 30% of car purchases</p>
      <p><strong>2027 prediction:</strong> AI search surpasses traditional Google for local business discovery</p>
      
      <p>The dealerships that optimize now will own the market. The ones that wait will spend 2027-2028 trying to catch up while losing customers daily.</p>
    `,
  },
  'ai-visibility-guide': {
    slug: 'ai-visibility-guide',
    title: 'The Complete Guide to AI Visibility for Car Dealerships',
    date: 'March 1, 2026',
    readingTime: '8 min read',
    content: `
      <h2>What is AI Visibility?</h2>
      <p>AI visibility is the measure of how likely your dealership is to be recommended by AI search engines like ChatGPT, Perplexity, Claude, and voice assistants like Siri and Alexa.</p>
      
      <h2>Why It Matters</h2>
      <p>Traditional SEO optimizes for Google search results. AI visibility optimizes for AI recommendations. When a customer asks ChatGPT &quot;What&apos;s the best car dealership near me?&quot; - will your dealership be the answer?</p>
      
      <h2>The RRF Score</h2>
      <p>We measure AI visibility using the RRF (Reciprocal Rank Fusion) algorithm, which combines multiple factors:</p>
      <ul>
        <li>Citation consistency across the web</li>
        <li>Review volume and sentiment</li>
        <li>Content freshness and relevance</li>
        <li>Backlink authority</li>
        <li>Local relevance signals</li>
      </ul>
      
      <h2>How to Improve Your Score</h2>
      <p>1. <strong>Audit Your Current State</strong> - Know your baseline RRF score</p>
      <p>2. <strong>Fix NAP Inconsistencies</strong> - Ensure Name, Address, Phone are identical everywhere</p>
      <p>3. <strong>Build Citations</strong> - Submit to 50+ directories</p>
      <p>4. <strong>Generate Reviews</strong> - Multi-platform review strategy</p>
      <p>5. <strong>Create Content</strong> - Weekly blog posts targeting AI queries</p>
      <p>6. <strong>Monitor Progress</strong> - Track RRF score monthly</p>
    `,
  },
  'rrf-algorithm-guide': {
    slug: 'rrf-algorithm-guide',
    title: 'Understanding the RRF Algorithm: How AI Ranks Local Businesses',
    date: 'February 28, 2026',
    readingTime: '6 min read',
    content: `
      <h2>What is RRF?</h2>
      <p>RRF (Reciprocal Rank Fusion) is the algorithm that determines which businesses AI systems recommend when users ask questions like &quot;What&apos;s the best car dealership near me?&quot;</p>
      
      <h2>How RRF Works</h2>
      <p>The algorithm combines multiple ranking signals:</p>
      <ul>
        <li><strong>Citation Rank</strong> - How many authoritative sources mention your business</li>
        <li><strong>Review Rank</strong> - Volume and sentiment of reviews across platforms</li>
        <li><strong>Content Rank</strong> - Freshness and relevance of your content</li>
        <li><strong>Authority Rank</strong> - Quality of backlinks to your website</li>
        <li><strong>Consistency Rank</strong> - NAP consistency across the web</li>
      </ul>
      
      <h2>Scoring System</h2>
      <p>RRF scores range from 0-100:</p>
      <ul>
        <li><strong>0-25:</strong> Invisible to AI - not recommended</li>
        <li><strong>26-50:</strong> Low visibility - rarely recommended</li>
        <li><strong>51-75:</strong> Moderate visibility - sometimes recommended</li>
        <li><strong>76-90:</strong> High visibility - often recommended</li>
        <li><strong>91-100:</strong> Dominant - primary recommendation</li>
      </ul>
      
      <h2>Improving Your RRF Score</h2>
      <p>Each component can be optimized through specific strategies. The key is consistent effort across all factors, not just focusing on one area.</p>
    `,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
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
          
          {/* Title */}
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          
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
              Get a free audit of your dealership&apos;s AI search presence and discover exactly how to outrank competitors.
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

export function generateStaticParams() {
  return [
    { slug: 'ai-visibility-2026-guide' },
    { slug: 'ai-visibility-guide' },
    { slug: 'rrf-algorithm-guide' },
  ];
}
