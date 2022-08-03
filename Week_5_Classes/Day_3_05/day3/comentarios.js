// Hashing - One way operation

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const plainPassword1 = "Charmander";
const plainPassword2 = "charmander";

const salt = bcrypt.genSaltSync(saltRounds);
console.log(salt);

const hashed1 = bcrypt.hashSync(plainPassword1, salt);
const hashed2 = bcrypt.hashSync(plainPassword2, salt);
console.log(hashed1, hashed2);

const verifyPass1 = bcrypt.compareSync(plainPassword1, hashed1);
const verifyPass2 = bcrypt.compareSync(plainPassword2, hashed2);
console.log(verifyPass1, verifyPass2);

