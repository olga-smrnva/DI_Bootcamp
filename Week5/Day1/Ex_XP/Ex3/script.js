// 1. Convert this JS object into a JSON object. What happens to the nested objects ?
		//they steyed inside "characters" also converted to the json type
// 2. Convert and pretty print this JS object into a JSON object. 
// Hint : Check out the JSON lesson on the platform.
// 3. Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

let marioGame = {
	detail : "An amazing game!",
	characters : {
		mario : {
			description:"Small and jumpy. Likes princesses.",
			height: 10,
			weight: 3,
			speed: 12,
		},
		bowser : {
			description: "Big and green, Hates princesses.",
			height: 16,
			weight: 6,
			speed: 4,
		},
		princessPeach : {
			description: "Beautiful princess.",
			height: 12,
			weight: 2,
			speed: 2,
		}
	},
  };

  const jsonMario = JSON.stringify(marioGame);
  console.log(JSON.stringify(marioGame, null, 4));