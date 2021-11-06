const gifsEl = document.getElementById("gifs");
const formEl = document.getElementById("form");
const inputTitle = document.getElementById("title");
const inputNumber = document.getElementById("number");

const fetchAndAppendGifs = (title, number) => {
	const xhr = new XMLHttpRequest();
	xhr.open(
		"GET",
		`https://api.giphy.com/v1/gifs/search?q=${title}&limit=${number}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
);

xhr.send();

xhr.onload = function () {
	if (xhr.status != 200) {
		console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
	} else {
		appendGifs(JSON.parse(xhr.response).data);
	};
  };
};

const appendGifs = (gifsObj) => {
	gifsObj.forEach((gif) => {
		//creating gif-container element
		const div = document.createElement("div");
		div.classList.add("gif-container");
		
		//creating img element for gif
		const img = document.createElement("img");
		img.setAttribute("src", gif.images.downsized_medium.url);
		img.classList.add("gif");
		
		//creating delete-button element
		const button = document.createElement("button");
		button.append("X");
		button.onclick = () => div.remove();

		div.append(img, button);

		gifsEl.append(div);
  });
};

formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	fetchAndAppendGifs(inputTitle.value, inputNumber.value);
});