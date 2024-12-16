export const config = {
	title: 'Bflix',
	author: 'Harsh',
	headerTitle: 'Bflix',
	description:
		'Bflix is a free online movie streaming platform that is trusted for watching Movies and TV series - BflixHD',
	language: 'en-us',
	theme: 'dark', // system, dark or light
	domain: 'https://bflix.icu',
	siteUrl: 'https://bflix.icu',
	siteRepo: 'https://github.com/harshascode/bflix.icu',
	siteLogo: '/icon-512.png',
	// image: '/img/avatar.png',
	email: 'info@bflix.icu',
	github: 'https://github.com/harshascode/bflix.icu',
	twitter: 'https://twitter.com/bflix',
	facebook: 'https://www.facebook.com/bflix',
	youtube: 'https://www.youtube.com/watch?v=p3RwX06wcBs',
	linkedin: 'https://www.linkedin.com/bflix.icu',
	locale: 'en-US',
	primaryColor: '#06a261',

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	// newsletter: 'mailchimp',

	multiuser: false
};

// export const user = {
// 	name: 'admin',
// 	// avatar value can be removed for image
// 	avatar: '/logo.png',
// 	// twitter value can be removed for no link to twitter
// 	twitter: 'https://twitter.com/bflix'
// };

export const navLinks = [
	{ href: '/', title: 'Home' },
	{ href: '/diclaimer', title: 'Diclaimer' },
	// { href: '/telugu-movies', title: 'Telugu' },
	// { href: '/tamil-movies', title: 'Tamil' },
	// { href: '/kannada-movies', title: 'Kannada' },
	// { href: '/malayalam-movies', title: 'Malayalam' },
	// { href: '/about', title: 'About' },
	// { href: '/bookmarks-list', title: 'Bookmarks' },
	{ href: '/blog', title: 'Blog' }
];

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
};

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '' // e.g. pied-piper-blog.netlify.app
};
