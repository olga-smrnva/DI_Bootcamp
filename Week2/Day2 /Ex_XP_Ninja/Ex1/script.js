// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

function twiceAsYoung(Date1, Date2) {

	if (Date1 > Date2) {
		return (Date1 * 2 - Date2);
	} else {
		return (Date2 * 2 - Date1);
	};

};	

twiceAsYoung(1992, 1987);
