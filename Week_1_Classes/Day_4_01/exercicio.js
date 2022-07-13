//Create a function called average that accepts 1 parameter - an array
// return the average of all numbers

let myAverageArray = [350, 560, 680, 10];
function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    } return sum / array.length;
}
console.log(average(myAverageArray));


//The array must have numbers from 1 to 100, but you can't use push
let myArray2 = []
for (let i = 100; i > 0; i--) {
    myArray2.unshift(i);
}
console.log(myArray2);

// user object - name, city
// 3x song1, song2, song3 - title, artist, genre

let user = {
    name: 'Lucas',
    city: 'Rio de Janeiro',
};
let song1 = {
    title: 'Lust for Life',
    artist: 'Iggy Pop',
    genre: 'Rock',
};
let song2 = {
    title: 'Animals',
    artist: 'Pink Floyd',
    genre: 'Rock',
};
let song3 = {
    title: 'The Passanger',
    artist: 'Iggy Pop',
    genre: 'Rock',
};
user.playlist = [song1, song2, song3];
console.log(user);
let song4 = {title: 'Yesterday', artist: 'The Beatles', genre: 'Rock'};
user.playlist.push(song4);
console.log(user);