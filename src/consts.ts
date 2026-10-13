// Global data for vickum.com (English version).
// The Spanish version lives at kuminov.es with the same structure.

export const LANG = "en";
export const SITE_URL = "https://vickum.com";
export const SITE_NAME = "Víctor Kuminov";
export const SITE_TITLE = "Víctor Kuminov · Web design and development studio · Spain";
export const SITE_DESCRIPTION =
	"Lightning-fast landing pages, lightweight online stores and iOS and Android apps. A boutique studio with 20 years of experience and clients like LG, Sisley and Toyota.";

// Contact / owner details
export const CONTACT_EMAIL = "victor.kuminov@gmail.com";
export const CONTACT_CITY = "Avilés (Asturias), Spain";
export const WHATSAPP_PHONE = "+34 637 23 56 34";
export const WHATSAPP_URL =
	"https://wa.me/34637235634?text=" +
	encodeURIComponent("Hi Víctor, I'm writing from vickum.com. I'd like to tell you about my project.");
export const TELEGRAM_URL = "https://t.me/vickumcom";

// Same page in the other language at kuminov.es (hreflang and language switch)
export const ALT_LANG = { code: "es", label: "ES", name: "Español", site: "https://kuminov.es" };
export const ALT_PATHS: Record<string, string> = {
	"/": "/",
	"/services": "/servicios",
	"/landing-pages": "/landings",
	"/online-stores": "/tiendas-online",
	"/apps": "/apps",
	"/rescue": "/rescate",
	"/platform-migration": "/cambio-de-plataforma",
	"/ai": "/ia",
	"/restaurants": "/hosteleria",
	"/sell-worldwide": "/vender-al-mundo",
	"/seo-ai-visibility": "/seo-visibilidad-ia",
	"/maintenance": "/mantenimiento",
	"/platform": "/plataforma",
	"/work": "/casos",
	"/pricing": "/precios",
	"/about": "/sobre-mi",
	"/contact": "/contacto",
	"/legal/notice": "/legal/aviso-legal",
	"/legal/privacy": "/legal/privacidad",
	"/legal/cookies": "/legal/cookies",
};
