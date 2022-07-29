const mongoose = require('mongoose');
const Song = require('./models/Song.model')


// Connect with mongoDB

mongoose
  .connect('mongodb://localhost/SongModel')
  .then((x) => console.log(`Connected to mongoDb, database name: ${x.connections[0].name}`))
  .catch((err) => console.log(err));


Song.create({
    title: 'Lust for Life',
    artists: ['Iggy Pop'],
    genre: ['Rock'],
    album: 'Lust for Life',
    release_date: Date.now(),
    released: true,
    format: 'album',
    popularity: 100,
}).then((createdSong) => console.log(createdSong))
.catch(err => console.log(err));

const User = mongoose.model('User', user.Schema)
module.exports = User;