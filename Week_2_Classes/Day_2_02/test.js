// ex.5 lab greatest movies
/* 
function orderByYear(moviesArray) {
    let moviesCopy = [...moviesArray];

    //moviesCopy.sort((a, b) => a.year - b.year);
    moviesCopy.sort((a, b) => {
        // compare by year
        if (a.year > b.year) return -1;
        else if (b.year < a.year) return 1;
        if (a.year === b.year) {
            // if they have the same year, compare by title
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return 1;
        } else {
            return 0;
        }
    }}); return moviesCopy;
}

// ex.3 lab greatest movies

function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;

    let totalRate = moviesArray.reduce((acc, val) => {
        if (val.score) return acc + val.score;
        else return acc;
    }, 0)

    return Number((totalRate / moviesArray.length).toFixed(2));
}

// ex.4 lab greatest movies

function dramaMoviesScore(moviesArray) {
    // Filter the array for drama movies
    // includes checks if a property exists inside an array
    let allDrama = moviesArray.filter((movie) => movie.genre.includes('Drama'));
    //use the previous function to calculate the average
    return scoresAverage(allDrama);
}
 */

// create a function called countTen()
// inside the function run a setInterval that will print the time each second, like so: 1, 2, 3, 4, ...
// once it gets to 10, stop the clock

/* 
function countTen() {
    let x = 0;
    let intervalID = setInterval(countTen, 1000);
    for (let i = 0; i < 10; i++) {
        x++;
    } if (intervalID > 10) {
        clearInterval(intervalID);
    }
}

countTen(); */


function countTen() {
    let i = 0;
    const intervalID = setInterval(() => {
        if (i < 10) {
            i++;
            console.log(i);
        } else {
            clearInterval(intervalID);
        }
    }, 1000)
}
countTen();

let user = {
    name: 'Diogo',
    age: 31,
    getOlder: function() {
    let IntervalID = setInterval(() => {
            this.age++;
            console.log(this.age); 
            if (this.age > 40) { // me vai aparecer 41 pq to dando o console log dps que eu conto (this.age++)
                clearInterval(intervalID);
            }
        }, 1000);
    },
};
user.getOlder();


function acceptCallback(callback) {
    if (callback) callback()
}

acceptCallback();

