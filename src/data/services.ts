// Studio services. Each one gets its own page at /[slug].
// Prices: brief of 14.07.2026, all + VAT. No platform or technology names.

export type Group = "build" | "ai" | "sector" | "grow";

export interface Service {
	slug: string;
	group: Group;
	name: string;
	short: string;
	price: string;
	metaTitle: string;
	metaDescription: string;
	h1: string;
	lead: string;
	badge?: "demo" | "dev";
	forWhom?: string[];
	includes?: string[];
	blocks?: { title: string; text: string; badge?: "demo" | "dev" }[];
	steps?: { title: string; text: string }[];
	proof?: { title: string; text: string };
	pricing: { price: string; notes: string[] };
	faq: { q: string; a: string }[];
	related: string[];
}

export const groups: Record<Group, { title: string; text: string }> = {
	build: {
		title: "What I build",
		text: "Custom websites, stores and apps. Fixed price and deadline agreed before we start.",
	},
	ai: {
		title: "Artificial intelligence",
		text: "Assistants, automations and a store you can run by just talking to it.",
	},
	sector: {
		title: "By industry",
		text: "Proven solutions for specific kinds of business.",
	},
	grow: {
		title: "Grow and maintain",
		text: "Get found, keep everything running and get a little better every month.",
	},
};

export const services: Service[] = [
	// ───────────── Build ─────────────
	{
		slug: "landing-pages",
		group: "build",
		name: "Lightning-fast landing pages",
		short: "Custom sales pages that load in under a second and turn visitors into customers.",
		price: "from €2,900",
		metaTitle: "Lightning-fast landing pages that convert · Víctor Kuminov",
		metaDescription:
			"Custom sales pages and company websites: original design, under one second to load, delivered in 2-3 weeks. From €2,900 + VAT.",
		h1: "Lightning-fast landing pages that convert",
		lead: "Custom sales pages with original design and a single goal: turning a visit into a customer. They load in under a second, and you can measure that yourself.",
		forWhom: [
			"Product launches and ad campaigns.",
			"Businesses built on trust: clinics, law firms, real estate, schools.",
			"Events, courses and bookings.",
			"Companies that need a serious website without a template look.",
		],
		includes: [
			"Sales strategy and page structure",
			"Copy written to convert, in several languages if you need it",
			"100% custom design, no templates",
			"Under 1 second to load, verifiable in Google PageSpeed",
			"Technical SEO and event analytics",
			"Contact form, WhatsApp and appointment booking",
			"GDPR consent on every form",
			"A panel to publish news and articles, if you need one",
		],
		blocks: [
			{
				title: "Speed is money",
				text: "Google penalises slow websites and people leave before they finish loading. My pages are prepared before anyone asks for them and the server hands them over ready-made. That's why they open instantly, even on a weak mobile signal.",
			},
			{
				title: "Every screen has a job",
				text: "No empty decoration. First we decide what the visitor should do in each section, then I design it. It looks expensive because it's orderly, not because of special effects.",
			},
		],
		pricing: {
			price: "from €2,900",
			notes: [
				"Landing page: €2,900-6,000, delivered in 2-3 weeks.",
				"Multi-page company website: from €4,900, 3-5 weeks.",
				"Fixed price and deadline before we start.",
			],
		},
		faq: [
			{
				q: "Can I edit the text myself?",
				a: "Yes. If you need it, I'll give you a simple panel for text, news and articles. And if you'd rather not touch anything, send it to me and I'll change it as part of maintenance.",
			},
			{
				q: "Who owns the domain and the website?",
				a: "You do. The domain is registered in your name and I hand everything over. If you ever want to change provider, you take it all with you.",
			},
			{
				q: "How long does it take?",
				a: "A landing page, 2-3 weeks. A company website, 3-5. You get a fixed date before we start.",
			},
		],
		related: ["online-stores", "seo-ai-visibility", "maintenance"],
	},
	{
		slug: "online-stores",
		group: "build",
		name: "Lightweight online stores",
		short: "A fast e-commerce site that's easy to run and belongs to you: pay once, no monthly rent.",
		price: "from €7,500",
		metaTitle: "Lightweight, fast online stores · Víctor Kuminov",
		metaDescription:
			"An online store you own, with no monthly platform fees. Your own admin panel, payments and shipping. From €7,500 + VAT. Selling in 40+ countries.",
		h1: "Lightweight online stores that are fast and easy to run",
		lead: "An e-commerce site that sells from day one, that your team runs without depending on anyone, and that is yours. You pay for development once, with no monthly platform fee.",
		forWhom: [
			"Brands and makers selling direct to customers: food, cosmetics, fashion, furniture, crafts.",
			"Stores paying a platform every month and watching the fee go up.",
			"Manufacturers who sell made-to-measure and want customers to work out the price themselves.",
			"Businesses with catalogues of hundreds or thousands of products.",
		],
		blocks: [
			{
				title: "Don't rent your store. Own it.",
				text: "On a rented platform you pay every month, and every extra feature is another fee. When they raise prices, you pay. With my store you pay for development once, and the code, the data and the domain are yours. If you ever want to change provider, you take the whole thing with you.",
			},
			{
				title: "Your own admin panel",
				text: "Change prices, stock and visibility and the site updates instantly. Raise the whole catalogue by a percentage, hide a group of products or load prices from a spreadsheet. Every team member has their own permissions, and a log shows who changed what and when.",
			},
			{
				title: "Orders never get lost",
				text: "Every order is saved on the server and appears in the panel with its status. You get notified by email and Telegram. If the panel is down, the store keeps selling and the order still reaches you.",
			},
			{
				title: "Customer accounts",
				text: "Your customers save addresses and favourites, reorder in one click and find their basket on both phone and computer.",
			},
			{
				title: "For made-to-measure products",
				text: "If you sell made-to-measure, the customer works out the price on their own: sizes, colours, finishes, hardware. For a door manufacturer we built it with 4,185 combinations, and every order arrives with the full specification.",
			},
		],
		includes: [
			"Catalogue and sales strategy",
			"Custom design",
			"Payments by card, Apple Pay, PayPal and local methods such as Bizum",
			"Shipping with national and international carriers",
			"Invoicing done right (in Spain: VAT and Verifactu, with your accountant)",
			"Banners and promotions that switch on and off by date",
			"Optimised photos: much lighter, same quality",
			"Product descriptions written with AI where they're missing",
			"360° product views if your product needs them",
			"Migration from your current store without losing search rankings",
			"Video training for your team",
			"30 days of support after launch",
		],
		proof: {
			title: "The standard",
			text: "My longest-standing client has been selling with the store I built for more than 10 years. Today it sells in more than 40 countries.",
		},
		pricing: {
			price: "from €7,500",
			notes: [
				"Typical project: €7,500-18,000.",
				"Timeline: 4-8 weeks.",
				"Afterwards you only pay for hosting and, if you want, a maintenance plan.",
			],
		},
		faq: [
			{
				q: "Can I run it myself?",
				a: "Yes. Prices, stock, orders, articles and banners are all in your panel. You get video training and 30 days of support included.",
			},
			{
				q: "I already have a store. Will I lose my rankings?",
				a: "No. I keep page addresses or redirect the old ones, and keep your analytics. Your rankings move with the store.",
			},
			{
				q: "What do the big platforms have that this doesn't?",
				a: "Big platforms come with more warehouse features and ready-made apps. I add what your store needs and leave out what it doesn't. In exchange there's no monthly fee and the store is yours.",
			},
			{
				q: "Can I sell through chat too?",
				a: "Yes. The same store can have a mini-store inside Telegram and an AI assistant that recommends products. Orders arrive in the same panel.",
			},
		],
		related: ["platform-migration", "sell-worldwide", "ai"],
	},
	{
		slug: "platform-migration",
		group: "build",
		name: "From rented to owned",
		short: "I move your store off a monthly-fee platform onto one you own, without losing sales or Google.",
		price: "fixed quote",
		metaTitle: "Move your store off a rented platform · Víctor Kuminov",
		metaDescription:
			"Online store migration without losing search rankings: catalogue, photos, redirects and analytics. Stop paying a monthly platform fee.",
		h1: "Your store, from rented to owned",
		lead: "I move your store from a monthly-fee platform to one you own. The catalogue, photos, page addresses and statistics move with it. You pay for development once and stop paying fees.",
		forWhom: [
			"Your catalogue has grown and the fee grows with it.",
			"You pay extra for features that should come as standard.",
			"You want the website, the code and the data to be yours.",
			"Your current store is slow and you don't know why.",
		],
		steps: [
			{
				title: "Audit and transfer",
				text: "I review the current store and move the catalogue, photos and text. I prepare the redirects.",
			},
			{
				title: "Side-by-side testing",
				text: "You check the new store on a temporary address while the old one keeps selling.",
			},
			{
				title: "Domain switch",
				text: "I switch the domain without taking the site or your email offline for a single minute.",
			},
			{
				title: "Ongoing support",
				text: "You manage prices and stock in the panel. I watch over the site and add what's needed.",
			},
		],
		blocks: [
			{
				title: "What you don't lose",
				text: "I keep page addresses or set up permanent redirects from the old ones, and keep the same analytics. Rankings and history move with the store. I've done this with stores of 274, 580 and 677 products. One of them needed 736 redirects.",
			},
			{
				title: "When it isn't worth it",
				text: "If your store is small and the fee is low, it may not pay off. I'll show you the numbers before we start: what you pay now, what your own store would cost and how long it takes to pay for itself.",
			},
		],
		includes: [
			"Transfer of catalogue, photos, text and customers",
			"Permanent redirects from old addresses",
			"Same analytics, no lost history",
			"Photos converted to lightweight formats",
			"AI descriptions for products that have none",
			"Domain switch with no downtime for site or email",
		],
		pricing: {
			price: "fixed quote",
			notes: [
				"Set after the audit (€450, deducted from the project).",
				"If you also want a new design, it's priced as an online store: from €7,500.",
			],
		},
		faq: [
			{
				q: "How long does the move take?",
				a: "It depends on the catalogue. We moved a fashion store with 677 products and 37 brands in a few days. You get a fixed date after the audit.",
			},
			{
				q: "Does the store go offline during the switch?",
				a: "No. The new store is tested side by side and the domain is switched when everything is ready. Site and email stay up.",
			},
		],
		related: ["online-stores", "rescue", "seo-ai-visibility"],
	},
	{
		slug: "apps",
		group: "build",
		name: "iOS and Android apps",
		short: "One codebase, two platforms: your first app without a big-agency budget.",
		price: "from €3,000",
		metaTitle: "Custom iOS and Android apps · Víctor Kuminov",
		metaDescription:
			"Your first app from a single codebase: from concept to the App Store and Google Play from €3,000 + VAT. Senior studio, direct contact.",
		h1: "iPhone and Android apps your customers will want to use",
		lead: "One codebase, two platforms. Your first app without a big agency's budget, from concept to the App Store.",
		forWhom: [
			"Businesses with repeat customers: bookings, orders, loyalty.",
			"An idea you want to test without spending tens of thousands.",
			"Companies that need an internal tool for their team.",
		],
		includes: [
			"Product and experience definition: the first version you actually need",
			"Interface design for iOS and Android",
			"Cross-platform development: one codebase, two stores",
			"Integrations: payments, notifications, your website or your CRM",
			"Publishing on the App Store and Google Play",
			"Analytics and a roadmap",
		],
		blocks: [
			{
				title: "Are you sure you need an app?",
				text: "I'll tell you in our first conversation. If a website solves your problem, I'll say so and save you thousands. I only build apps that make sense.",
			},
			{
				title: "Why this price",
				text: "A native app built twice, separately for iOS and Android, costs €30,000 or more at an agency. I work from a single codebase: the same result for your customers, half the work and an honest entry price.",
			},
		],
		pricing: {
			price: "from €3,000",
			notes: [
				"First app: €3,000-12,000.",
				"Products with their own server and integrations: custom quote.",
				"Timeline: from 4 weeks.",
			],
		},
		faq: [
			{
				q: "Can the app use my store's catalogue?",
				a: "Yes. If your store was built with me, the app works with the same catalogue, prices and stock.",
			},
			{
				q: "Who publishes it in the stores?",
				a: "I do. I prepare listings, screenshots and the Apple and Google review. The developer account is in your name; the app is yours.",
			},
		],
		related: ["online-stores", "ai", "maintenance"],
	},
	{
		slug: "rescue",
		group: "build",
		name: "Project rescue",
		short: "Paid for a website that doesn't sell? I find out why and get it working.",
		price: "from €2,500",
		metaTitle: "Rescue for websites and stores that don't sell · Víctor Kuminov",
		metaDescription:
			"Your website or store doesn't sell, or was left half-finished. €450 strategic audit and rescue from €2,500 + VAT. I redo it or refund you.",
		h1: "Your website doesn't sell. I find out why and fix it.",
		lead: "I fix what others couldn't. If you paid for a website or a store that never sold, or someone left it half-done, that's exactly what I do.",
		forWhom: [
			"You paid for a website and it never sold.",
			"Someone started your online store and walked away.",
			"You tried on your own and got stuck halfway.",
			"Nobody wants to touch your site because \"it's a mess\".",
		],
		steps: [
			{
				title: "Strategic audit",
				text: "I review the tech, the design and the conversion. You get a clear written report and we go through it together.",
			},
			{
				title: "Prioritised plan",
				text: "What's broken, what's unnecessary and what to fix first so it starts selling.",
			},
			{
				title: "Rescue",
				text: "I fix what's broken without rebuilding everything for the sake of it.",
			},
			{
				title: "Measure",
				text: "We check with real data that it works. If you're not satisfied, I redo it or refund you.",
			},
		],
		proof: {
			title: "From six lost months to selling in one",
			text: "A historic craft manufacturer had spent six months with a store that sold nothing. I relaunched it in under a month, for a fraction of what they had paid. More than ten years later they're still with me.",
		},
		pricing: {
			price: "from €2,500",
			notes: [
				"Entry point: strategic audit, €450. If you hire me for the rescue, it's fully deducted.",
				"Typical rescue: €2,500-8,000.",
			],
		},
		faq: [
			{
				q: "What if the audit says I need to start over?",
				a: "I'll tell you straight, with the reasons and what it would cost. Sometimes rebuilding is cheaper than patching, and sometimes fixing three things is enough.",
			},
			{
				q: "Someone else built my site. Can you work on it?",
				a: "Yes, that's most of what I do. I need whatever access you have; if you don't have it, I'll help you get it back.",
			},
		],
		related: ["platform-migration", "online-stores", "maintenance"],
	},

	// ───────────── AI ─────────────
	{
		slug: "ai",
		group: "ai",
		name: "AI for your business",
		short: "An assistant that serves your customers, tasks that do themselves and a store you run by talking to it.",
		price: "consulting €75/h",
		metaTitle: "Artificial intelligence for business · Víctor Kuminov",
		metaDescription:
			"An AI assistant that serves your customers with your real catalogue, automations, product copy and voice control for your store. Consulting from €75/h + VAT.",
		h1: "Artificial intelligence that works for your business",
		lead: "I use AI every day in my own work and bring it into real businesses: an assistant that serves your customers, repetitive tasks that run themselves, and copy nobody used to have time to write. You see the result. I take care of the technology.",
		blocks: [
			{
				title: "An assistant that sells from your catalogue",
				text: "It answers your customers in chat, recommends products with real photos, prices and stock, and only offers what you actually have. When a question goes beyond what it knows, it calls someone from your team. In a tactical gear store it recommends products by compatibility and prepares the order. Today it runs on Telegram.",
			},
			{
				title: "Your store inside Telegram",
				text: "A catalogue with search, photos, live prices and stock, basket and checkout without leaving the chat. Orders arrive in the same panel as website orders, with one catalogue for everything.",
			},
			{
				title: "Run your store by talking",
				text: "You write or say to a bot: \"raise cheese prices by 10%\". It shows you how it understood, you confirm, and the change appears on the site. Prices, stock, text and banners change instantly. Design changes only after a preview. Code and payments can't be touched by voice. Every change is logged and can be undone with one click.",
			},
			{
				title: "Automations",
				text: "Translating catalogues and documents, answering the usual questions, reports that build themselves, product pages from photos and specs. In a fashion store, AI wrote descriptions for 413 products that had none.",
			},
			{
				title: "Consulting",
				text: "If you don't know where to start, one session to see which tasks in your business can be automated and which aren't worth it. I'll tell you honestly, even if the answer is \"not yet\".",
			},
			{
				title: "Order updates in chat",
				text: "The customer gets every change in their order status in chat, instead of emails nobody reads.",
				badge: "dev",
			},
		],
		pricing: {
			price: "from €75/h",
			notes: [
				"Consulting: €75/h.",
				"Implementation (assistant, Telegram mini-store, automations): fixed quote after the first session.",
			],
		},
		faq: [
			{
				q: "Will the AI make things up in front of my customers?",
				a: "The assistant only recommends what's in your catalogue, with real prices and stock. Anything it doesn't know, it hands over to a person.",
			},
			{
				q: "Do I need to be technical?",
				a: "No. Tell me what eats your time and I'll suggest what to automate, with what it costs and what it saves.",
			},
			{
				q: "Does it work on WhatsApp?",
				a: "Today the assistant and the mini-store run on Telegram. If your customers are on WhatsApp, we'll look at your case and I'll tell you clearly what's possible.",
			},
		],
		related: ["online-stores", "restaurants", "maintenance"],
	},

	// ───────────── Industries ─────────────
	{
		slug: "restaurants",
		group: "sector",
		name: "QR menus and table ordering",
		short: "For restaurants, cider houses and bars: guests scan, order from the table and the waiter gets it instantly.",
		price: "custom quote",
		badge: "demo",
		metaTitle: "QR menu and table ordering for restaurants · Víctor Kuminov",
		metaDescription:
			"Digital menu with a QR code and ordering from the table, nothing to install. The waiter gets the order with the table number. For restaurants, cider houses and bars.",
		h1: "Digital menus and ordering from the table",
		lead: "For restaurants, cider houses, bars and cafés. Guests scan the code on the table, see the menu on their phone without installing anything, and order. The waiter receives the order with the table number.",
		blocks: [
			{
				title: "No apps",
				text: "The menu opens in the phone's browser, with photos and prices. If you get tourists, we can prepare it in English and other languages too.",
			},
			{
				title: "Orders go straight to the waiter",
				text: "The order with the table number arrives on the waiter's phone. They tap \"Accept\" and then \"Ready\", and the guest sees the status on their phone.",
			},
			{
				title: "Table cards included",
				text: "We design the cards with the QR code for each table, ready to print.",
			},
			{
				title: "Payment, tips and bookings",
				text: "Paying from the phone, tips, table bookings and a link to your till system.",
				badge: "dev",
			},
		],
		pricing: {
			price: "custom quote",
			notes: ["Depends on the number of tables, languages and whether the menu is view-only or for ordering too."],
		},
		faq: [
			{
				q: "Can I see it working first?",
				a: "Yes. I have a demo café: I'll send you the link on WhatsApp or by email.",
			},
			{
				q: "Who changes prices and the daily specials?",
				a: "You do, from a simple panel. Changes show up on the menu instantly.",
			},
		],
		related: ["ai", "landing-pages", "seo-ai-visibility"],
	},
	{
		slug: "sell-worldwide",
		group: "sector",
		name: "Sell your product worldwide",
		short: "A multilingual store and international shipping for producers, makers and craft brands.",
		price: "from €7,500",
		metaTitle: "Sell your products worldwide: multilingual online store · Víctor Kuminov",
		metaDescription:
			"A multilingual online store, international payments and per-country shipping for producers and makers. I did it for a craft manufacturer that now sells in 40+ countries.",
		h1: "Take your product from here to the world",
		lead: "I did it for a historic craft manufacturer that now sells in more than 40 countries. I want to do the same for the cheese, cider, preserves and crafts of Asturias and all of Spain, and for makers anywhere with a product worth travelling for.",
		forWhom: [
			"Food and drink producers with something you can't find abroad.",
			"Workshops and makers whose foreign customers go home and want to keep buying.",
			"Brands that sell to tourists and want to keep selling to them after the trip.",
		],
		blocks: [
			{
				title: "A store in several languages",
				text: "I translate the site and the catalogue into English and other languages. I've worked with copy in English, Italian, Hebrew, Russian and Spanish. Reviewed text, not blind machine translation.",
			},
			{
				title: "International payments and shipping",
				text: "Foreign cards and PayPal, shipping rates by country and zone. I'll help you decide which countries to sell to first. For food or alcohol, your accountant or adviser checks the tax and customs side, and I build it into the store.",
			},
			{
				title: "Get found abroad",
				text: "SEO in every language, your product's story told for people who don't know the region, and visibility in AI assistants, which already recommend stores to shoppers all over the world.",
			},
		],
		proof: {
			title: "40+ countries",
			text: "A historic craft manufacturer has been selling with my store for more than ten years. Its pieces travel from New Zealand and Bali to Australia, the Americas and all of Europe.",
		},
		pricing: {
			price: "from €7,500",
			notes: [
				"Priced as an online store, with the languages and countries you need.",
				"Translating a store you already have: quoted on catalogue size.",
			],
		},
		faq: [
			{
				q: "Which country should I start with?",
				a: "Wherever you already see signals: tourists who buy from you, orders by email, followers on social media. We'll look at the data together.",
			},
			{
				q: "Can I start with just an English website?",
				a: "Yes. An English landing page with your story and an order form is enough to test demand before investing in a full store.",
			},
		],
		related: ["online-stores", "seo-ai-visibility", "landing-pages"],
	},

	// ───────────── Grow ─────────────
	{
		slug: "seo-ai-visibility",
		group: "grow",
		name: "SEO and AI visibility",
		short: "Get found on Google and get recommended by ChatGPT and other AI assistants.",
		price: "from €100/mo",
		metaTitle: "SEO and visibility in ChatGPT and AI assistants · Víctor Kuminov",
		metaDescription:
			"Technical and local SEO, a blog with fact-checked content and visibility in ChatGPT, Gemini and Perplexity. AI visibility module from €100/month.",
		h1: "Get found on Google and in AI answers",
		lead: "More and more people ask ChatGPT, Gemini or Perplexity before they search Google. I prepare your site for both: classic search engines and AI assistants.",
		blocks: [
			{
				title: "Technical SEO",
				text: "Speed, sitemap, structured data for search engines, proper redirects and correctly tagged language versions. The foundation almost nobody checks.",
			},
			{
				title: "Local SEO",
				text: "Your Google Business profile, consistent details across directories and pages written for your area. So people searching nearby find you.",
			},
			{
				title: "AI visibility",
				text: "An llms.txt file, markup and content AI assistants can read and cite. Few people offer this yet. I do, and I use it on my own websites.",
			},
			{
				title: "A blog that sells",
				text: "A year-long content plan and articles with checked facts and links to products in your catalogue. We wrote 10 articles for a tableware store and 14 for a wine store. Every text is reviewed by a human: no machine filler.",
			},
		],
		pricing: {
			price: "from €100/mo",
			notes: [
				"AI visibility: €100-150/month as a maintenance add-on.",
				"Ongoing technical SEO and content: included in the Growth plan (€950/month).",
				"One-off SEO audit: part of the strategic audit (€450).",
			],
		},
		faq: [
			{
				q: "How soon will I see results?",
				a: "Technical fixes show within weeks. Content and rankings take months. You get a monthly report with data, not promises.",
			},
			{
				q: "Do AI assistants really recommend businesses?",
				a: "Yes, and more every month. When someone asks \"where to buy\" or \"who can do this\", the assistant cites sources. My job is to make your site a source it can read and cite.",
			},
		],
		related: ["maintenance", "landing-pages", "sell-worldwide"],
	},
	{
		slug: "maintenance",
		group: "grow",
		name: "Maintenance and support",
		short: "Your site checked every day, always up to date, with someone who answers. Your tech team, without hiring one.",
		price: "from €490/mo",
		metaTitle: "Website maintenance and monthly support · Víctor Kuminov",
		metaDescription:
			"Care, Growth and Partner maintenance plans: daily monitoring, backups, security, improvements and priority support. From €490/month + VAT.",
		h1: "Maintenance: your tech team, without hiring one",
		lead: "Launching the site is the beginning. After that someone has to watch it, update it and handle your changes. That someone is me.",
		blocks: [
			{
				title: "Daily monitoring",
				text: "Every day we check that your site opens and that the security certificate isn't about to expire. We find out about a problem before your customers do.",
			},
			{
				title: "Backups and versions",
				text: "Data backups and all code under version control. Any change can be undone.",
			},
			{
				title: "Security and updates",
				text: "I keep the site up to date and apply security improvements. You don't have to think about it.",
			},
		],
		pricing: {
			price: "from €490/mo",
			notes: [
				"Care, €490/month: updates, security, backups, priority support and up to 3 hours of changes a month.",
				"Growth, €950/month: everything in Care plus conversion experiments, technical SEO and a monthly report.",
				"Partner, €1,900/month: your external tech team, with a bank of hours and quarterly strategy.",
				"One-off work without a plan: €90/h, packs from 5 hours.",
			],
		},
		faq: [
			{
				q: "Can I get maintenance for a site you didn't build?",
				a: "Yes. First I review it (audit) to see what I'm dealing with and whether it can be maintained properly.",
			},
			{
				q: "Is there a minimum term?",
				a: "No. Month to month. I stay because the work is useful, not because of a contract.",
			},
		],
		related: ["seo-ai-visibility", "rescue", "online-stores"],
	},
];

export const bySlug = (slug: string) => services.find((s) => s.slug === slug);

// Smaller services without their own page ("Also")
export const extras = [
	{
		title: "Social media and design",
		text: "Posts, graphic design and campaign assets, by the hour or as part of maintenance.",
	},
	{
		title: "Multilingual websites and content",
		text: "Spanish, English and Russian, including for businesses serving Russian-speaking customers in Spain.",
	},
	{
		title: "Strategic audit",
		text: "Tech, design and conversion of your website, store or app, with a clear written report. €450, deducted from the project.",
	},
	{
		title: "One-off work",
		text: "Specific fixes and changes without a monthly plan. €90/h, packs from 5 hours.",
	},
];
