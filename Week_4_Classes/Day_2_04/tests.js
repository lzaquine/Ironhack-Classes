// Create an /about page that responds with your name

const http = require("http");
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello");
    response.end();
  } else if (request.url === "/about") {
    response.write("Lucas Zaquine");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("404 page");
    response.end();
  }
});
server.listen(3001);
