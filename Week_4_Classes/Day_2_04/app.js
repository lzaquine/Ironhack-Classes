const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.static('public'));

// Routes

// GET Route - expecting GET request
//request, response, next

/* app.get("/home", (req, res, next) => {
  console.log(req);
  res.send("<h1>Hello!</h1>");
}); */
app.get("/home", (req, res, next) => {
  res.sendFile(__dirname + '/public/views/home.html');
});


app.get("/about", (req, res, next) => {
  console.log(req);
  res.send("<li>About!</li>");
});


app.get("/cat", (req, res, next) => {
  console.log(req);
  /* res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./stylesheets/style.css"/>
      <title>Cat Page</title>
  </head>
  <body>
      <h1>Cat</h1>
      <p>Cat route</p>
  </body>
  </html>`); */
  res.sendFile(__dirname + '/public/views/cat.html')
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
