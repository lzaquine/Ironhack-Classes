const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        enum: ['Black', 'White', 'Orange']
    },
    age: {
        type: Number,
        min: 0,
        max: 30
    },
    profilePic: {
        type: String,
        /* default: 'link da foto default' */
    },
    location: {
        address: String,
        zipCode: Number,
    },
    password: {
        type: String,
        match: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$`,
    }
    toys: [String], //pra criar um array uso [String] ou Array
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;