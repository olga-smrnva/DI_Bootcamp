// Create a program to retrieve the data from the API URL provided above. 
// Use XMLHttpRequest object to make an AJAX request to the Giphy API 
// and console.log the Javascript Object.


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.send();

xhr.onload = function() {
	if (xhr.status != 200) console.log(`Oups, error status ${xhr.status} occured`);
	else console.log(JSON.parse(xhr.response));
};