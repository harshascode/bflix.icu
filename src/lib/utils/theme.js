import { browser } from '$app/environment';
import { config } from '$lib/config';

const THEME_KEY = 'theme'; // Use a constant for the theme key

const isLocalStorageAvailable = () => {
	try {
		const testKey = '__test__'; // Use a test key for checking localStorage
		localStorage.setItem(testKey, testKey);
		localStorage.removeItem(testKey);
		return true;
	} catch (e) {
		return false; // Return false if localStorage is not available
	}
};

const getPreferredTheme = () => {
	if (isLocalStorageAvailable() && localStorage.getItem(THEME_KEY)) {
		return localStorage.getItem(THEME_KEY);
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : config.theme;
};

const isDarkMode = () => {
	return browser ? getPreferredTheme() === 'dark' : false; // Simplified logic
};

const setDarkMode = (darkMode, save = true) => {
	document.documentElement.classList.toggle('dark', darkMode); // Use toggle for cleaner code
	if (save && isLocalStorageAvailable()) {
		localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light'); // Use setItem for consistency
	}
	return darkMode;
};

const toggleDarkMode = () => {
	return setDarkMode(!isDarkMode());
};

export { isDarkMode, setDarkMode, toggleDarkMode };

// import { browser } from '$app/environment';

// import { config } from '$lib/config';

// const isLocalStorageAvailable = () => {
// 	var test = 'test';
// 	try {
// 		localStorage.setItem(test, test);
// 		localStorage.removeItem(test);
// 		return true;
// 	} catch (e) {
// 		return false;
// 	}
// };
// const isDarkMode = () => {
// 	let darkMode = false;
// 	if (browser) {
// 		if (isLocalStorageAvailable() && 'theme' in localStorage) {
// 			darkMode = localStorage.theme === 'dark';
// 		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 			darkMode = true;
// 		} else {
// 			darkMode = config.theme === 'dark';
// 		}
// 	} else if (isLocalStorageAvailable()) {
// 		darkMode = localStorage.theme === 'dark';
// 	}

// 	return darkMode;
// };

// const setDarkMode = (darkMode, save = true) => {
// 	if (darkMode) {
// 		document.documentElement.classList.add('dark');
// 		if (save) localStorage.theme = 'dark';
// 	} else {
// 		document.documentElement.classList.remove('dark');
// 		if (save) localStorage.theme = 'light';
// 	}
// 	return darkMode;
// };

// const toggleDarkMode = () => {
// 	return setDarkMode(!isDarkMode());
// };

// export { isDarkMode, setDarkMode, toggleDarkMode };
