// "What every store includes": the in-house platform I build on.
// Source: qs50.ru/vozmozhnosti, without services specific to the Russian market.
// Status: live = running in client stores, demo = demo available, dev = in development.

export type Status = "live" | "demo" | "dev";

export interface Feature {
	title: string;
	text: string;
	status?: Status;
}

export interface FeatureGroup {
	title: string;
	text: string;
	status: Status;
	items: Feature[];
}

export const platformIntro = {
	metaTitle: "What every store includes · Víctor Kuminov",
	metaDescription:
		"Everything a store built with me comes with: an ultra-fast site, your own admin panel, selling on Telegram, an AI assistant, voice control, QR menus for restaurants. With the real status of each part.",
	eyebrow: "The platform",
	h1: "What every store includes",
	lead: "Everything I build for one client goes into the platform and becomes available to the next. Here is the full list, with the real status of each part: running in client stores, demo available, or in development.",
};

export const platform: FeatureGroup[] = [
	{
		title: "A fast site and a move with no losses",
		text: "The foundation.",
		status: "live",
		items: [
			{
				title: "Ultra-light website",
				text: "Pages are prepared in advance and the server hands over a ready-made file. The site opens fast even on a weak mobile signal.",
			},
			{
				title: "Migration from other platforms",
				text: "I move the catalogue, photos and text and set up redirects from the old addresses. I've already moved stores of 274, 580 and 677 products.",
			},
			{
				title: "Lightweight photos",
				text: "Images are converted to modern formats. In a fashion store, photos became 86% lighter with no visible difference.",
			},
			{
				title: "AI descriptions",
				text: "Where descriptions are missing, AI writes them from photos and specs. That's how 413 product pages were completed in a fashion store.",
			},
			{
				title: "Made-to-measure calculator",
				text: "Customers price a made-to-measure product from your own table: sizes, colours, options. For a door manufacturer that's 4,185 combinations.",
			},
			{
				title: "360° photos",
				text: "Product pages you can rotate to see from every side.",
			},
		],
	},
	{
		title: "Your own admin panel: you run the store",
		text: "No depending on anyone for day-to-day work.",
		status: "live",
		items: [
			{
				title: "Prices and stock, instantly",
				text: "Change a price or a stock level and the site updates straight away. Raise the whole catalogue by a percentage or hide a group of products.",
			},
			{
				title: "Prices from a spreadsheet",
				text: "Upload a file or link an online spreadsheet and the site takes its prices from there.",
			},
			{
				title: "Blog and pages",
				text: "An article or a news item goes live when you save it. SEO fields, cover images and a media library that compresses images on its own.",
			},
			{
				title: "Banners and promotions",
				text: "Set the dates and the promotion switches itself on and off.",
			},
			{
				title: "Orders with statuses",
				text: "All orders in one list: new, in progress, done. Notifications by email and Telegram. Step through orders one by one with any filter.",
			},
			{
				title: "Team and log",
				text: "Everyone gets their own permissions. The log shows who changed what and when.",
			},
			{
				title: "Customer accounts",
				text: "Saved addresses, favourites, one-click reorders and the basket on every device.",
			},
			{
				title: "Stock that updates itself",
				text: "Every website order deducts the units sold, so you never sell what you no longer have.",
			},
		],
	},
	{
		title: "Selling in chat and an AI assistant",
		text: "Sell where your customers already are.",
		status: "live",
		items: [
			{
				title: "Mini-store on Telegram",
				text: "A catalogue with search, galleries, live prices and stock, basket and checkout inside the chat. Orders arrive in the same panel as website orders.",
			},
			{
				title: "AI assistant in chat",
				text: "Answers customers, recommends by need and by compatibility and shows product cards with photo, price and stock. Only offers what's in the catalogue and calls a person when needed.",
			},
			{
				title: "Order status in chat",
				text: "Customers get their order status updates in chat.",
				status: "dev",
			},
		],
	},
	{
		title: "Voice control",
		text: "Say it, confirm it, done.",
		status: "live",
		items: [
			{
				title: "No sooner said than done",
				text: "A voice or text message to the bot: \"raise cheese prices by 10%\", \"hide what's out of stock\". The bot shows how it understood and, once you confirm, the change appears on the site.",
			},
			{
				title: "Three permission levels",
				text: "Prices, stock, text and banners change instantly. Design and structure only after a preview. Code and payments can't be touched by voice.",
			},
			{
				title: "Log and undo",
				text: "Every voice change is marked in the panel log and can be undone with one click.",
			},
		],
	},
	{
		title: "Restaurants: QR menus and table ordering",
		text: "For restaurants, cider houses and bars.",
		status: "demo",
		items: [
			{
				title: "No apps",
				text: "Guests scan the code on the table and open the menu in their browser, nothing to install.",
			},
			{
				title: "Orders to the waiter",
				text: "The order arrives with the table number. The waiter taps \"Accept\" and \"Ready\", and the guest sees the status on their phone. We design the table cards too.",
			},
			{
				title: "Payment, tips and bookings",
				text: "Paying from the phone, tips, table bookings and integration with your POS system.",
				status: "dev",
			},
		],
	},
	{
		title: "Industries",
		text: "What we've already solved for specific kinds of business.",
		status: "live",
		items: [
			{
				title: "Made-to-measure manufacturing",
				text: "Customers choose size, colour and options, the price comes from your factory table and the order arrives with the full specification.",
			},
			{
				title: "Fashion and multi-brand",
				text: "A catalogue with brands, sizes, colours and filters. A store of 677 products and 37 brands, moved in a few days.",
			},
			{
				title: "Wine and drinks",
				text: "A storefront with age confirmation for alcohol.",
			},
		],
	},
	{
		title: "Reliable and compliant",
		text: "What you don't see, but notice the day it fails.",
		status: "live",
		items: [
			{
				title: "No order is ever lost",
				text: "Every order or enquiry is saved on the server and reaches the panel. If the panel doesn't respond, it arrives by email and Telegram. Optionally, in a spreadsheet too.",
			},
			{
				title: "The site doesn't depend on the panel",
				text: "If the panel is down, the store stays open and keeps selling.",
			},
			{
				title: "Daily monitoring",
				text: "Every day we check that client sites open and that the security certificate isn't about to expire.",
			},
			{
				title: "Backups and versions",
				text: "Backups and all code under version control. Any change can be undone.",
			},
			{
				title: "Moves without downtime",
				text: "The domain is switched without the site or email going down.",
			},
			{
				title: "Privacy",
				text: "Consent on every form and a privacy policy. Legal text is checked by your accountant or lawyer.",
			},
		],
	},
	{
		title: "Content and visibility",
		text: "So people find you.",
		status: "live",
		items: [
			{
				title: "Turnkey blog",
				text: "A year-long content plan and articles with checked facts and links to the catalogue. 10 articles for a tableware store, 14 for a wine store.",
			},
			{
				title: "From your channel to your blog",
				text: "Your posts become linked articles on the site: people who arrive from Google discover your channel, and your followers reach the store.",
			},
			{
				title: "Search engines and AI assistants",
				text: "Sitemap, structured data and an llms.txt file so you're found on Google and in AI assistants' answers.",
			},
		],
	},
	{
		title: "Coming next",
		text: "In development. I only call it ready once it's proven with a real client.",
		status: "dev",
		items: [
			{
				title: "Customer club",
				text: "A loyalty programme with points per purchase and a digital product passport with authenticity checks.",
			},
			{
				title: "Store app",
				text: "An iOS and Android app on the same catalogue. The first version exists: catalogue, in-store pickup, points and a barcode scanner.",
			},
			{
				title: "A new store in 15 minutes",
				text: "Enter your current store's address and get a draft of the new one on the platform.",
			},
		],
	},
];
