// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base

const radiusInput = document.querySelector("#radius");
const submitButton = document.querySelector("#submit");
const volume = document.querySelector("#volume");

function volumeCalculator(radius) {
    let volume = ((4/3)*Math.PI*Math.pow(radius,3)).toFixed(2);
    return volume;
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    radius = radiusInput.value;
	volume.value = volumeCalculator(radius);	
});