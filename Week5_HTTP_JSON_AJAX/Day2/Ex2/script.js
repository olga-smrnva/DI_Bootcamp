let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.send();

xhr.onload = function() {
	if (xhr.status != 200) console.log(`Oups, error status ${xhr.status} occured`);
	else console.log(JSON.parse(xhr.response));
};