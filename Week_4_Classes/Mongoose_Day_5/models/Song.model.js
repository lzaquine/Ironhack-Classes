// Create the song model and schema

// title - String - required
// artists - Array of strings - required
// album - String - required
// release_date - Date - required
// genre - Array of strings
// duration - Number - min 0
// released - boolean
// format - String - only 1 of 3 options - 'album', 'single', 'digital'
// popularity - number from 0 to 100

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema ({
    title: {
        type: String,
    required: true,
    },
    artists: {
        type: [String], 
        required: true,
    },
    album: {
        type: String,
        required: true,
    },
    release_date: {
        type: Date,
        required: true,
        // default: Date.now,
    },
    genre: [String],
    duration: {
        type: Number,
        min: 0,
    },
    released: {
        type: Boolean,
    },
    format: {
        type: String,
        enum: ['album', 'single', 'digital'],
    },
    popularity: {
        type: Number,
        min: 0,
        max: 100,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
