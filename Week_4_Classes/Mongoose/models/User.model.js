const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = mongoose.User;

const userSchema = new Schema(
  {
    name: String,
    password: String,
    job: String,
    age: Number,
    email: String,
  },
  { timestamps: true }
);

// CRUD
// Create
// Read
// Update
// Delete

let user1 = {
  name: "Andre",
  job: "Teacher",
  age: 28,
  email: "a@ironhack.com",
};
let user2 = {
  name: "Xico",
  job: "Teacher Assistant",
  age: 19,
  email: "x@ironhack.com",
};
let user3 = {
  name: "Diogo",
  job: "PM",
  age: 31,
  email: "d@ironhack.com",
};


// Create
User.create( { name: 'Felix' } )
.then((users) => console.log(users))
  .catch((err) => console.log(err));

// insertMany - creates more than one
User.insertMany([user1, user2, user3])
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

//Read
//Projection
User.find({ age: { $gte: 20 } }, "name age")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

//Sort
User.find({}, null, { sort: { age: 1 } })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// findOne // findById
User.findOne({ name: "Xico" })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

User.findById(/* ' numero da id ' */)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Update
User.updateOne({ name: "Xico" }, { job: "Developer" })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

User.findByIdAndUpdate(
  /* ' numero da id ', */ { job: "Captain" },
  { new: true }
)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

// Delete
User.deleteOne({ name: "Diogo" })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

User.findByIdAndDelete(/* ' numero da id ' */)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));


// Count how many 'Developers' there are
User.countDocuments({job: 'Developer'})
.then((count) => console.log(count))
.catch((err) => console.log(err));




// Destructuring
let person = {
  name: 'Phil',
  location: 'Chicago',
  favouriteMusic: 'Hmm Pop',
  country: 'USA',
  address: {
    street: 'Rua taltaltal',
    number: 69,
  },
};

// Old way:
/* let name = person.name;
let location = person.location;
let favouriteMusic = person.favouriteMusic;
console.log(`Hello ${name}`);
console.log(`You are from ${location}`);
console.log(`Your favourite music is ${favouriteMusic}`); */

// With destructuring:
/* let { name, location: city, favouriteMusic, country = 'Portugal' } = person */

let {name, address: {street, number} } = person;
console.log(name, street, number);

/* console.log(name, city, favouriteMusic, country);
console.log(`Hello ${name}`);
console.log(`You are from ${location}`);
console.log(`Your favourite music is ${favouriteMusic}`); */

const pokemon = {
  name: 'Snorlax',
  types: {
    main: 'Normal',
    secondary: 'Ground',
  },
  generation: 1,
  isCatchable: true,
};

// 'Snorlax is from generation 1 and it's type is Normal'

let {name, types: {main}, generation} = pokemon;
console.log(`${name} is from generation ${generation} and it's type is ${main}`);


//Array destructuring

const campuses = ['Lisbon', 'Barcelona', 'Paris'];
const [firstCampus, secondCampus, thirdCampus] = campuses;

console.log(firstCampus, secondCampus, thirdCampus);

// we can skip index by using a space and , ex:
const [ , secondCampus, thirdCampus] = campuses; // se eu consolelog vai aparecer barcelona e paris
const [ , , thirdCampus] = campuses; // aqui so apareceria paris

const [firstCampus, , thirdCampus, fourthCampus = 'Berlin'] = campuses; // posso add tambem
console.log(firstCampus, thirdCampus, fourthCampus);

const europeanCampuses = [
  ['barcelona, es'],
  ['lisbon, pt'],
  ['paris, fr'],
  ['berlin, de'],
]

const [ [firstCity, firstCountry], [secondCity, secondCountry], [thirdCity, thirdCountry], [fourthCity, fourthCountry] ] = europeanCampuses
console.log(firstCity, secondCity);

const [ [firstCity], [ , secondCountry] ] = europeanCampuses;
console.log(firstCity, secondCountry);

let [a, b = 2, c, d = 1] = [3, 4]
console.log(a, b, c, d)
//a = 3, b = 4, c = undefined, d = 1
// we get the index 0
// only if there wasn't a second value, b = 2
// trying to extract c from index 2, that doesn't exists, so we get undefined
// trying to get the 3 index, that doesn't exists, so we get 1
//3, 4, undefined, 1



// Spread operator
const reptiles = ['snake', 'iguana', 'crocodile', 'godzilla'];
const birds = ['eagle', 'falcon', 'seagull', 'pidgeon'];

const reptilesCopy = [...reptiles]
console.log(reptilesCopy); // we get all the values of the array

const animals = [...reptiles, ...birds]
console.log(animals); // we get a new array with everything



// Rest operator
function showMovie(title, year, ...actors) // that's the rest operator 
{
  console.log(`${title} is from the year ${year} and the 
  cast includes ${actors}`);
};
showMovie('The Godfather', 1972, 'Al Pacino', 'Marlon Brando',
'Robert de Niro');

