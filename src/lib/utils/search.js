const fuzzySearch = (items, query) => {
	if (!query || !items.length) return []; // Return empty if no query or items

	const searchTerms = query.toLowerCase().split(' ').filter(Boolean); // Remove empty terms

	console.log('search >>>', searchTerms);

	const includesTerm = (value, term) => {
		return value.toString().toLowerCase().includes(term);
	};

	return items.filter((item) => {
		return searchTerms.every((term) => {
			return Object.values(item).some((value) => {
				return value != null && includesTerm(value, term); // Check for null/undefined
			});
		});
	});
};

export default fuzzySearch;

// const fuzzySearch = (items, query) => {
//     if (!query || !items.length) return []; // Return empty if no query or items

//     const searchTerms = query.toLowerCase().split(' ');

//     console.log('search >>>', searchTerms);

//     return items.filter(item => {
//         return searchTerms.every(term => {
//             return Object.values(item).some(value => {
//                 return value?.toString().toLowerCase().includes(term);
//             });
//         });
//     });
// };

// export default fuzzySearch;

// const fuzzySearch = (items, query) => {
// 	let search = query?.toLowerCase().split(' ');

// 	console.log('search >>>', search);
// 	let ret = items.reduce((found, i) => {
// 		let matches = 0;
// 		search.forEach((s) => {
// 			let props = 0;
// 			for (var prop in i) {
// 				let p = i[prop]?.toString().toLowerCase();
// 				if (p?.indexOf(s) > -1) {
// 					props++;
// 				}
// 			}
// 			if (props >= 1) {
// 				matches++;
// 			}
// 		});
// 		if (matches == search.length) {
// 			found.push(i);
// 		}
// 		return found;
// 	}, []);
// 	return ret;
// };

// export default fuzzySearch;
