# Understanding RRF: The Secret Algorithm Behind AI Citations

## What Is RRF?

RRF stands for Reciprocal Rank Fusion. It's the algorithm that powers how ChatGPT, Claude, Perplexity, and Gemini decide which businesses to recommend.

And here's the thing: almost nobody in the SEO world knows about it.

We discovered RRF by accident. We were trying to figure out why some dealerships got mentioned by AI and others didn't. The usual SEO metrics didn't explain it. A dealership with terrible traditional SEO would get cited constantly. A dealership with perfect SEO was invisible.

Something else was happening. That something was RRF.

## How We Found It

It started with a tweet. Tilen Savnik, a developer who goes by @tsavnik, reverse-engineered ChatGPT's citation algorithm using Chrome DevTools. He watched the network traffic while ChatGPT answered questions. He saw what was happening under the hood.

What he found changed everything.

ChatGPT doesn't just search once and pick the top result. It searches multiple times. Different variations of the query. Different angles. Then it combines those results using RRF.

The formula is elegant in its simplicity:

**RRF Score = Σ 1/(k + rank)**

Where k is a constant (usually 60) and rank is the position in each search result.

## Why This Changes Everything

Traditional SEO optimizes for one search: "best Toyota dealership Oakville."

RRF optimizes for twenty searches:
- "best Toyota dealership Oakville"
- "reliable Toyota service Oakville"
- "honest Toyota dealer near me"
- "where to buy Toyota Oakville"
- "Toyota trade-in value Oakville"
- And fifteen more variations

The dealership that appears across multiple contexts with decent rankings beats the dealership that ranks #1 for one context.

This is why some dealerships dominate AI recommendations despite mediocre traditional SEO. They're playing a different game.

## How RRF Actually Works

Let's say ChatGPT is answering: "What's the best Toyota dealership in Oakville?"

It runs multiple internal searches:

**Search 1:** "best Toyota dealership Oakville"
- Your dealership: Rank 3
- Competitor A: Rank 1
- Competitor B: Rank 2

**Search 2:** "reliable Toyota service Oakville"  
- Your dealership: Rank 2
- Competitor A: Not in top 10
- Competitor B: Rank 1

**Search 3:** "honest Toyota dealer Oakville"
- Your dealership: Rank 4
- Competitor A: Rank 2
- Competitor B: Not in top 10

Now calculate RRF scores (k=60):

**Your Dealership:**
- Search 1: 1/(60+3) = 0.0159
- Search 2: 1/(60+2) = 0.0161
- Search 3: 1/(60+4) = 0.0156
- **Total RRF: 0.0476**

**Competitor A:**
- Search 1: 1/(60+1) = 0.0164
- Search 2: 0 (not ranked)
- Search 3: 1/(60+2) = 0.0161
- **Total RRF: 0.0325**

**Competitor B:**
- Search 1: 1/(60+2) = 0.0161
- Search 2: 1/(60+1) = 0.0164
- Search 3: 0 (not ranked)
- **Total RRF: 0.0325**

You win. Even though you never ranked #1 in any single search, your consistent presence across multiple contexts gives you the highest RRF score. ChatGPT cites you.

## What This Means for Car Dealerships

### The Old Playbook
Optimize for one keyword. Rank #1. Win.

### The New Playbook
Optimize for multiple contexts. Be present. Win.

This is harder in some ways. You can't just stuff keywords into a page. You need genuine authority across multiple dimensions.

But it's easier in other ways. You don't need to beat competitors at their own game. You need to play a different game entirely.

## The RRF Visibility Framework

We built our entire methodology around RRF. Here's how it works:

### Step 1: Context Mapping
We identify the 20+ query contexts where your dealership could be relevant:
- Brand contexts: "[Make] dealership [city]"
- Service contexts: "oil change [city]", "brake repair [city]"
- Trust contexts: "honest mechanic [city]", "reliable car dealer"
- Intent contexts: "buy [make] [city]", "trade-in value [city]"
- Comparison contexts: "[Make] vs [competitor]"

### Step 2: Citation Audit
We run each context through ChatGPT, Claude, Perplexity, and Gemini. We record:
- Do you appear?
- What's your rank?
- Who's beating you?

### Step 3: RRF Calculation
We calculate your RRF score for each context and overall.

### Step 4: Gap Analysis
We identify contexts where you're invisible. These are your biggest opportunities.

### Step 5: Citation Building
We create content and authority signals to capture missing contexts.

## Real-World Example

A Honda dealership in Burlington came to us with a problem. They ranked #3 on Google for "Honda dealership Burlington." Decent position. But ChatGPT never mentioned them.

Their RRF analysis revealed the issue: they only appeared in 3 out of 20 contexts. They were invisible everywhere else.

We built citations for the missing 17 contexts:
- Created service-specific pages
- Published authority content
- Generated targeted reviews
- Built local citations

Month 1: 3 contexts → 9 contexts
Month 2: 9 contexts → 15 contexts  
Month 3: 15 contexts → 19 contexts

Result: ChatGPT now cites them as "one of the best Honda dealerships in Burlington." Their words, not ours.

Walk-ins increased 18%. But more importantly, the leads were pre-qualified. These weren't tire-kickers. These were buyers who had already been told by AI that this dealership was worth visiting.

## Why Most Agencies Miss This

Most SEO agencies are still playing the Google game. They're optimizing for PageRank, backlinks, keyword density.

Those things matter for traditional search. They barely matter for AI citations.

AI doesn't use PageRank. AI uses RRF. Different algorithm. Different optimization strategy.

Agencies that don't know about RRF are optimizing for the wrong thing. They're trying to win a game that's becoming less relevant while ignoring the game that matters more every day.

## How to Optimize for RRF

### 1. Multi-Context Content
Don't just have a "Services" page. Have specific pages for:
- Oil change service
- Brake repair
- Transmission work
- Tire replacement
- Each make you service

Each page targets a different context.

### 2. Review Velocity
AI checks recency. Reviews from six months ago matter less than reviews from last week.

Consistent review generation beats sporadic bursts.

### 3. Citation Diversity
Get mentioned in different places:
- Industry directories
- Local business listings
- Review sites
- Social platforms
- News mentions
- Blog references

Each mention reinforces your entity in a different context.

### 4. Schema Markup
Help AI understand what you are:
- LocalBusiness schema
- Service schema
- Review schema
- FAQ schema
- Event schema (for sales events)

Structured data makes you machine-readable.

### 5. Freshness Signals
Regular updates tell AI you're active:
- New blog posts
- Updated inventory
- Recent reviews
- Current hours/promotions

Stale websites signal closed or struggling businesses.

## The Future of RRF

As AI gets more sophisticated, RRF will evolve. But the core principle won't change: presence across multiple contexts beats dominance in one.

The dealerships that understand this now will have an insurmountable lead in two years. The ones that wait will be trying to catch up while AI-native competitors capture the market.

This isn't speculation. This is happening right now. The data is clear. The shift is already underway.

The only question is whether you'll adapt before your competitors do.

## Get Your RRF Score

We offer free RRF analysis for car dealerships. No obligation. No sales pitch. Just data.

We'll show you:
- Your current RRF score
- Which contexts you're winning
- Which contexts you're invisible in
- What your competitors are doing
- Specific recommendations to improve

**Contact:** 416-890-VBIZ | contact@vizbiz.ai

---

*Vizbiz specializes in RRF optimization for car dealerships. We don't just improve your SEO. We engineer your AI visibility.*