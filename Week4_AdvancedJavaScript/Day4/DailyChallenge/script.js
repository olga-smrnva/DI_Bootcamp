// 1. Create a class named Video. The class should be constructed with the following parameters:
//      • title (a string)
//      • uploader (a string, the person who uploaded it)
//      • time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
//      “uploader parameter watched all time parameter of title parameter!”
// 3. Instantiate a new Video instance and call the watch() method.
// 4. Instantiate a second Video instance with different values.
// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//      Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.


class Video {
    /**
     * 
     * @param {string} title 
     * @param {string} uploader - the person who uploaded the video
     * @param {number} time - the duration of the video in seconds
     */
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    };
    watch () {
        console.log(`${this.uploader} watched all the ${this.time} seconds of ${this.title}!`);
    };
};

let film = new Video ("Minions", "Grew", 100500);
film.watch();

let documentary = new Video("Puppies", "Jack", 4590);
documentary.watch();


//BONUS
let arr = [
    {title: "Men in Black",
    uploader: "Vasya",
    time: 5400},

    {title: "Lollipop",
    uploader: "John",
    time: 2300},

    {title: "Crocodile",
    uploader: "Ann",
    time: 3800},

    {title: "Angry Birds",
    uploader: "Olga",
    time: 5500},

    {title: "Hulk",
    uploader: "Serj",
    time: 6000}
];

let video = arr.map(elem => new Video(elem.title, elem.uploader, elem.time));

console.log(video);
video[0].watch();












