const http = require("http");
var fs = require("fs");

// file based text/html

const server = http.createServer((request, response) => {
  let path = "./views/";
  console.log(request.url);
  switch (request.url) {
    case "/":
      path += "home.html";
      console.log(path);
      response.statusCode = 200;
      fetchFile(path);
      break;
    case "/about":
      path += "about.html";
      console.log(path);
      response.statusCode = 200;
      fetchFile(path);
      break;
    case "/kittens":
      path += "/kittens.html";
      console.log(path);
      response.statusCode = 200;
      fetchFile(path);
      break;

    // how cache cookies in browser
    case "set-cookies":
      response.setHeader("Set-cookie", "fullName=Scooby Doo. Ruh OH shaggy!");
      response.end("dont toss your cookies");

    default:
      path += "404.html";
      response.statusCode = 404;
      fetchFile(path);
      break;
  }
});

function fetchFile(path) {    // fix this flow through error...
  fs.readFile(path, function (response,err, data) {
      if(err) {
          console.log(response);
          response.end();
      } else {
          console.log('file was served.')
          response.writeHead(response.statusCode, {'Content-Type': 'text/html'});
          response.write(data);
          response.end();
      }   
  });
}

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
