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