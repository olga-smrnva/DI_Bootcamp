// 1. Copy this object using the method that was taught in today’s lesson.
// 2. Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// 3. Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?

let groceries = {
	fruits : ["pear", "apple", "banana"],
	vegetables: ["tomatoes", "cucumber", "salad"],
	totalPrice : "20$",
	other : {
		payed : true,
		meansOfPayment : ["cash", "creditCard"]
	}
};

let groceriesNew = groceries;

groceries.totalPrice = "35$";
groceries["other.payed"] = false;

console.log(groceries);