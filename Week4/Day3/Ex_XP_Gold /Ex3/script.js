// What is the value of i ?

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i); 
	// i = 0 during the first call. It will be i++ after every call until it reaches 5
	alert(num);
	return num * 2;
});
