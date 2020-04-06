const Server = require("./server.js").default
const webpack = require("webpack")
const webpackConfig = require("./webpack.config.js")


webpack(webpackConfig,(err,stats)=> {
    server.sendMessageToWS("refresh")
})

var server =  Server(80,true)

server.start()

