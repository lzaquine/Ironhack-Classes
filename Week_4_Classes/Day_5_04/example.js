const mongoose = require("mongoose");
const Cat = require('./models/Cat.model')

// Connect with mongoDB

mongoose
  .connect("mongodb://localhostel/IMDB")
  .then((x) =>
    console.log(`Connected to mongoDb, database name: ${x.connections[0].name}`)
  )
  .catch((err) => console.log(err));


// Models
// It allows us to create objects that have methods specific to communicating with mongoDB

const Cat = mongoose.model("Cat", { name: String });

// This will create the cats collection

const kitty = new Cat({ name: 'Ironhacker' });

// Save

kitty
.save()
.then((newCat) => console.log('New cat created', newCat))
.catch((err) => console.log(err));

// Find
//return all documents from the collection
Cat.find()
.then(() => console.log(allCats))
.catch(err => console.log(err));


// Schemas

Cat.create({
    name: 'Felix',
    color: 'Black',
    age: 3
}).then((newCat) => console.log(newCat))
.catch(err => console.log(err));
//String, Number, Boolean, Date, Arrays, Objects, ObjectId
