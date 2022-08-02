/* const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: String,
      
      // unique: true -> Ideally, should be unique, but its up to you

    post: [{type: Schema.Types.ObjectId, ref: 'Post'}]
    

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User; */

// post model para usar na db e criar relacoes entre os models
// quando cria um post, cria um objeto com id e tudo na DB
// o autor do post vai ser uma pessoa/user. e que vai ter a propriedade do user