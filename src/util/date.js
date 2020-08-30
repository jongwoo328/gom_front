function customDate(date) {
	let customdate = date;
	customdate = customdate.replace('T', ' ').slice(0, 19);
	return customdate;
}

export { customDate };
