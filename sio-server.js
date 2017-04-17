var express = require("express"); //express server
var http = require("http");
var app = express();
var server = http.createServer(app).listen(3000); //create server based on app
var io = require("socket.io")(server); //socket.io is a function

app.use(express.static("./public")); //middleware serve files in public folder

io.on("connection", function(socket) {

    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message);
    });

	socket.emit("message", "Welcome to Cyber Chat");

});

console.log("Starting Socket App - http://localhost:3000");
