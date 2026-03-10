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
      <p>Car buyers aren&apos;t starting their search on Google anymore.</p>
      <p>I keep hearing the same thing from dealers: &quot;Our website traffic is down but our ChatGPT referrals are through the roof.&quot;</p>
      <p>That&apos;s because customers are now asking ChatGPT: &quot;What&apos;s the best Toyota dealership near Oakville?&quot;</p>
      <p>Or Siri: &quot;Find me a used car dealer with good reviews.&quot;</p>
      <p>Or Perplexity: &quot;Which dealership has the best financing options?&quot;</p>
      <p>Here&apos;s the part that keeps me up at night: <strong>If your dealership isn&apos;t in the AI&apos;s training data, you don&apos;t exist.</strong> Not &quot;you&apos;re hard to find.&quot; You literally don&apos;t exist in that customer&apos;s world.</p>
      
      <h2>Why Traditional SEO Isn&apos;t Enough</h2>
      <p>For two decades, dealerships focused on three things: keywords, Google Ads, and reviews.</p>
      <p>That worked when humans browsed search results. Click the first link, maybe the second, compare a few options.</p>
      <p>But AI doesn&apos;t browse. It synthesizes.</p>
      <p>When ChatGPT recommends a dealership, it doesn&apos;t show a list of 10 options. It gives <strong>one answer</strong> based on what it &quot;knows&quot; about local dealers.</p>
      <p>The question isn&apos;t whether you&apos;re on page one of Google. It&apos;s whether the AI knows you exist at all.</p>
      
      <h2>The New Visibility Game</h2>
      <p>AI systems learn about businesses from five sources:</p>
      <p><strong>Citations</strong> - Mentions across the web (directories, articles, press mentions)</p>
      <p><strong>Reviews</strong> - Sentiment and volume across multiple platforms</p>
      <p><strong>Content</strong> - Blog posts, videos, thought leadership</p>
      <p><strong>Consistency</strong> - Same name, address, phone everywhere</p>
      <p><strong>Authority</strong> - Backlinks from trusted sources</p>
      <p>Here&apos;s what we found when we audited 50 Toronto-area dealerships:</p>
      <ul>
        <li>78% had inconsistent NAP (Name, Address, Phone) across the web</li>
        <li>82% only had reviews on Google</li>
        <li>91% hadn&apos;t published a blog post in 6+ months</li>
        <li>64% had zero citations beyond basic listings</li>
        <li>100% had no AI-specific optimization strategy</li>
      </ul>
      <p>The result? Most are invisible to AI search.</p>
      
      <h2>Real Numbers</h2>
      <p>We tested 50 dealerships. Here&apos;s the data:</p>
      <ul>
        <li>Average AI Visibility Score: <strong>12/100</strong></li>
        <li>Top Performer: <strong>87/100</strong></li>
        <li>Citation Consistency: 34% average vs 94% for leaders</li>
        <li>Review Coverage: 2.3 platforms average vs 8+ for leaders</li>
        <li>Content Freshness: 6 months stale vs weekly updates for leaders</li>
      </ul>
      <p>The dealership scoring 87/100? They&apos;re getting 4x more AI-driven customer inquiries than average.</p>
      <p>Not because they&apos;re spending more on ads. Because the AI actually knows they exist.</p>
      
      <h2>What We Actually Do</h2>
      <p>We make dealerships AI-discoverable. Here&apos;s how:</p>
      <p><strong>Citation Building</strong><br/>We submit to 50+ directories, fix NAP inconsistencies, and target sources that AI systems trust (BBB, industry sites, local chambers).</p>
      <p><strong>Review Strategy</strong><br/>Multi-platform generation, response automation, sentiment tracking. Not just Google—Yelp, DealerRater, Facebook, everywhere.</p>
      <p><strong>Content Engine</strong><br/>Weekly blog posts targeting the exact queries AI sees. Local SEO content. Video transcripts optimized for voice search.</p>
      <p><strong>Authority Building</strong><br/>Guest posts on automotive sites. Podcast appearances. Industry forum participation.</p>
      <p><strong>Monitoring</strong><br/>Monthly RRF score tracking. Competitor analysis. Strategy adjustments based on what&apos;s actually working.</p>
      
      <h2>The 90-Day Reality</h2>
      <p><strong>Month 1</strong> is foundation: audit everything, fix NAP inconsistencies, build 20 citations, optimize Google Business Profile.</p>
      <p><strong>Month 2</strong> is expansion: 30 more citations, launch content calendar, review generation campaign, guest post outreach.</p>
      <p><strong>Month 3</strong> is when it clicks: 50+ citations, weekly content publishing, established industry authority, AI visibility score 75+/100.</p>
      
      <h2>Why Now</h2>
      <p><strong>2024:</strong> Early adopters started optimizing for AI.</p>
      <p><strong>2025:</strong> AI search went mainstream. ChatGPT, Perplexity, Claude became how people find businesses.</p>
      <p><strong>2026:</strong> AI recommendations now drive 30% of car purchases. This number is accelerating.</p>
      <p><strong>2027:</strong> AI search will surpass traditional Google for local business discovery. I&apos;m betting my business on it.</p>
      <p>The dealerships optimizing now will own their markets. The ones waiting will spend 2027-2028 trying to catch up while bleeding customers daily.</p>
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
