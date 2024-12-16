const formatDate = (date, locale = 'en-US') => {
	if (!date || isNaN(new Date(date))) {
		throw new Error('Invalid date provided');
	}

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

export default formatDate;

// import { config } from '$lib/config.js';

// const formatDate = (date) => {
// 	return new Date(date).toLocaleDateString(config.locale, {
// 		year: 'numeric',
// 		month: 'long',
// 		day: 'numeric'
// 	});
// };

// export default formatDate;
