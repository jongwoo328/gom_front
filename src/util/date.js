function customDate(date) {
	let customdate = date;
	customdate = customdate.replace('T', ' ').slice(0, 19);
	return customdate;
}

function isSameDay(now, date) {
	if (
		now.year === date.year &&
		now.getMonth() === date.getMonth() &&
		now.getDate() === date.getDate()
	) {
		return true;
	} else {
		return false;
	}
}

export { customDate, isSameDay };
