const Server = require("./server.js").default

var server =  Server(80,false)

server.start()