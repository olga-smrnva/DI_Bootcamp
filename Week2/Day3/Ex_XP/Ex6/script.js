// Given the object above, console.log “my name is Rudolf the raindeer”

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

let str = "";

for (let key in details) {
	str += (" " + key + " " + details[key]);
};

console.log(str);