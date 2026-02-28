export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-ticker">
          <span className="mx-8 font-bold">🚨 BREAKING: AI Search Just Killed Traditional SEO</span>
          <span className="mx-8 font-bold">⚡ URGENT: Dealerships Losing 40% of Traffic to AI Overviews</span>
          <span className="mx-8 font-bold">🔥 WARNING: Your Competitors Are Already Adapting</span>
          <span className="mx-8 font-bold">💀 REALITY CHECK: If You&apos;re Not in AI Search, You Don&apos;t Exist</span>
          <span className="mx-8 font-bold">🚨 BREAKING: AI Search Just Killed Traditional SEO</span>
          <span className="mx-8 font-bold">⚡ URGENT: Dealerships Losing 40% of Traffic to AI Overviews</span>
          <span className="mx-8 font-bold">🔥 WARNING: Your Competitors Are Already Adapting</span>
          <span className="mx-8 font-bold">💀 REALITY CHECK: If You&apos;re Not in AI Search, You Don&apos;t Exist</span>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Phone Number */}
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="font-semibold">1-888-VIZBIZ-1</span>
            </div>
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-red-500 text-3xl">⚡</span>
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">VIZ</span>
                <span className="text-red-500">BIZ</span>
              </span>
            </div>
            
            {/* Menu */}
            <div className="flex items-center gap-4">
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors hidden md:block">FAQ</a>
              <a href="#cta-form" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition-colors">
                Get Started
              </a>
              <button className="text-white md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Breaking News Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded mb-6 md:mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="font-bold text-sm tracking-wider">BREAKING NEWS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-6 md:mb-8 tracking-tight uppercase font-black">
            <span className="block text-white">WILD DETAILS</span>
            <span className="block text-white">EMERGE ABOUT...</span>
          </h1>

          {/* Sub Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-8 md:mb-12 max-w-4xl leading-tight">
            The AI Search Revolution That&apos;s Stealing Your Customers While You Sleep
          </h2>

          {/* Lead Paragraph */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mb-8 md:mb-12 leading-relaxed">
            While you&apos;re counting inventory and haggling over floorplan interest, 
            <span className="text-white font-bold"> AI search engines are eating your lunch.</span> 
            And the worst part? You don&apos;t even know it&apos;s happening.
          </p>

          {/* CTA Button */}
          <a 
            href="#cta-form"
            className="inline-block animate-pulse-red bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded transition-all transform hover:scale-105"
          >
            GET YOUR FREE AVI SCORE →
          </a>

          <p className="text-sm text-gray-500 mt-4">Takes 30 seconds. No credit card required.</p>
        </div>
      </section>

      {/* Dear Dealership Owner Letter */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 text-white uppercase font-black">
            Dear Dealership Owner,
          </h3>

          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>Lemme guess—you&apos;re lying awake at 3am wondering where tomorrow&apos;s walk-in is coming from?</p>

            <p>You&apos;re not alone. I&apos;ve talked to hundreds of dealers just like you. And imma shoot you straight...</p>

            <p className="text-white font-semibold text-xl md:text-2xl border-l-4 border-red-600 pl-6 py-2">
              Everything you know about getting customers through the door is becoming obsolete. 
              Not tomorrow. Not next year. <span className="text-red-500">Right now.</span>
            </p>

            <p>
              Remember when Google was just a search engine? Those days are gone, buttercup. 
              Now it&apos;s an <span className="text-white font-bold">AI-powered answer machine</span> that decides 
              whether customers ever see your dealership—or your competitor&apos;s.
            </p>

            <p>And here&apos;s the part that should make your stomach turn:</p>

            <p className="text-white font-bold text-2xl md:text-3xl text-center py-8">
              YOUR COMPETITORS ALREADY KNOW THIS.
            </p>

            <p>
              While you&apos;re still buying billboards and praying for lot traffic, 
              they&apos;re gaming the AI. They&apos;re feeding the machine. 
              They&apos;re showing up in every AI search result that matters.
            </p>

            <p>And you? You&apos;re becoming invisible.</p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-12 text-center uppercase font-black">
            THE VAMPIRE IN YOUR BUSINESS
          </h3>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300">
              <p className="text-xl md:text-2xl text-white font-semibold">
                AI search is like a vampire. It sucks the life out of traditional search traffic.
              </p>

              <p>
                When someone asks ChatGPT, Google Gemini, or Perplexity 
                <span className="text-white"> &quot;What&apos;s the best Toyota dealership near me?&quot;</span>—
                they get ONE answer. Not a list of ten. ONE.
              </p>

              <p>If that&apos;s not you? You&apos;re dead to that customer. They never even knew you existed.</p>

              <div className="bg-red-900/20 border border-red-600/50 p-6 rounded">
                <p className="text-red-400 font-bold text-xl mb-2">THE BRUTAL MATH:</p>
                <p className="text-white">
                  73% of car buyers now use AI tools for research. 
                  If you&apos;re not optimized for AI search, 
                  <span className="text-red-500 font-bold"> you&apos;re invisible to 3 out of 4 potential customers.</span>
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded border border-zinc-800">
              <h4 className="text-2xl mb-6 text-red-500 uppercase font-bold">OLD WAY vs NEW WAY</h4>
              
              <div className="space-y-4">
                <div className="opacity-50">
                  <p className="text-sm text-gray-500 mb-1">BEFORE (RIP 2025)</p>
                  <div className="bg-zinc-800 p-4 rounded">
                    <p className="text-gray-400">Google Search → 10 Blue Links → Customer Chooses</p>
                  </div>
                </div>

                <div className="text-4xl text-center text-red-600">↓</div>

                <div>
                  <p className="text-sm text-red-400 mb-1">NOW (2026)</p>
                  <div className="bg-red-950/30 border border-red-600/50 p-4 rounded">
                    <p className="text-white font-semibold">AI Search → ONE Curated Answer → Winner Takes All</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RRF Secret Sauce Section - NEW USP */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded mb-6">
            <span className="font-bold text-sm tracking-wider">🧠 PROPRIETARY TECHNOLOGY</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl mb-6 uppercase font-black">
            THE RRF SECRET<br />
            <span className="text-green-500">NOBODY ELSE KNOWS</span>
          </h3>

          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-300 mb-4">
              We reverse-engineered how ChatGPT actually decides who to cite.
            </p>
            
            <p className="text-white font-bold text-xl mb-4">
              It&apos;s not about ranking #1. It&apos;s about RRF — Reciprocal Rank Fusion.
            </p>

            <p className="text-gray-300 mb-6">
              ChatGPT runs 20+ different searches. Then it fuses the results. 
              The dealerships that appear across <span className="text-white font-bold">multiple contexts</span> get cited.
              The ones who only rank for &quot;car dealership&quot;? Ignored.
            </p>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-black p-4 rounded border border-zinc-800">
                <p className="text-3xl font-bold text-green-500">20+</p>
                <p className="text-sm text-gray-400">Query Contexts Analyzed</p>
              </div>
              <div className="bg-black p-4 rounded border border-zinc-800">
                <p className="text-3xl font-bold text-green-500">RRF</p>
                <p className="text-sm text-gray-400">Citation Algorithm</p>
              </div>
              <div className="bg-black p-4 rounded border border-zinc-800">
                <p className="text-3xl font-bold text-green-500">100%</p>
                <p className="text-sm text-gray-400">Proprietary Method</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-300 text-center">
            <span className="text-white font-bold">99% of agencies</span> focus on traditional SEO. 
            We focus on <span className="text-green-500 font-bold">multi-context AI visibility</span>. 
            That&apos;s why our clients get cited by ChatGPT while competitors chase Google rankings.
          </p>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="cta-form" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-red-950/30 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl mb-8 uppercase font-black">
            Ready to Dominate AI Search?
          </h3>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Get your FREE AVI Score and see exactly where you stand.
          </p>
          
          <p className="text-lg text-green-500 font-semibold mb-8">
            Includes RRF Citation Analysis — a $500 value, yours free.
          </p>

          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-zinc-900 border border-zinc-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded transition-colors"
              >
                GET MY SCORE
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-4">We&apos;ll never spam you. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl lg:text-6xl mb-4 uppercase font-black text-center">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Haven&apos;t found what you&apos;re looking for? <a href="mailto:contact@vizbiz.ai" className="text-red-500 hover:underline">Send us an email</a>
          </p>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">I don&apos;t know anything about AI search. Can you still help me?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  Absolutely. We built Vizbiz specifically for car dealers, not tech experts. You don&apos;t need to understand RRF algorithms or AI models—that&apos;s our job. You get a simple PDF report showing exactly where you stand and what to do. We handle the technical work, you focus on selling cars.
                </div>
              </details>
            </div>

            {/* FAQ 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">What is RRF and why does it matter?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  RRF = Reciprocal Rank Fusion. It&apos;s how ChatGPT decides who to cite. Instead of ranking #1 for one keyword, you need to appear across 20+ different conversation contexts. We reverse-engineered this algorithm. Most agencies don&apos;t even know RRF exists—which is why our clients get cited and theirs don&apos;t.
                </div>
              </details>
            </div>

            {/* FAQ 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">Is AI search just a fad? Should I wait?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  AI search isn&apos;t coming—it&apos;s here. 73% of car buyers now use AI tools for research. ChatGPT has 200M+ users. Perplexity just raised $73M. This is the biggest shift in search since Google launched. The dealerships that adapt now will dominate for the next decade. Those who wait? They&apos;ll spend 2026 playing catch-up.
                </div>
              </details>
            </div>

            {/* FAQ 4 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">How do I know this actually works?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  Two ways: (1) See our case studies—dealerships that increased AI citations from 3 to 15 contexts in 60 days, resulting in 23% more walk-ins. (2) Our 30-day guarantee—if your RRF score doesn&apos;t improve, you don&apos;t pay. We&apos;re that confident.
                </div>
              </details>
            </div>

            {/* FAQ 5 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">What exactly do I get in the AVI audit?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  You get a comprehensive PDF report with: (1) Your AVI Score (0-100) broken into 6 categories, (2) RRF Citation Heat Map showing 20+ query contexts, (3) Competitor analysis revealing where they dominate, (4) Specific gaps where you&apos;re invisible, (5) Prioritized action plan. Plus a 30-minute strategy call to review findings.
                </div>
              </details>
            </div>

            {/* FAQ 6 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">What do I need to do? I&apos;m busy running a dealership.</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  Almost nothing. We handle the entire audit. If you choose Citation Hosting, we create and host all content. You just approve the strategy. Most clients spend 30 minutes per month reviewing results—everything else is done for you.
                </div>
              </details>
            </div>

            {/* FAQ 7 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">How is this faster than traditional SEO?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  Traditional SEO takes 3-6 months to see movement. Our Citation Hosting gets you live in 48 hours and cited by AI within 1-2 weeks. Why? Because we&apos;re not trying to game Google&apos;s algorithm—we&apos;re engineering AI citations directly. While competitors wait months for rankings, you&apos;ll already be cited by ChatGPT, Claude, and Perplexity.
                </div>
              </details>
            </div>

            {/* FAQ 8 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">Do you just give me a report, or do you actually fix the problem?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  Both. The AVI audit shows you exactly what&apos;s wrong. Then our Citation Hosting service actually BUILDS the citations that get you mentioned by AI. We&apos;re not consultants—we&apos;re builders. While other agencies hand you a to-do list, we hand you results.
                </div>
              </details>
            </div>

            {/* FAQ 9 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">Why is this more expensive than [competitor]?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  Local Dominator charges $59/month for a dashboard that shows you problems. We charge $297/month to actually SOLVE them. They&apos;re a tool—we&apos;re a service. They track AI visibility—we create it. If you want DIY, use them. If you want results without becoming an AI expert, use us.
                </div>
              </details>
            </div>

            {/* FAQ 10 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-xl font-bold text-white">What if I want to cancel?</span>
                  <span className="text-red-500 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  You own all content we create. If you cancel Citation Hosting, we transfer everything to your infrastructure within 14 days. No hostage-taking. We earn your business monthly by delivering results, not by locking you in.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-red-600 text-2xl">⚡</span>
            <span className="font-bold text-xl">VizBiz</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 VizBiz. AI Visibility Intelligence for Car Dealerships.
          </p>
        </div>
      </footer>
    </main>
  );
}