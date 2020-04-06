const Express = require("express")
const path = require("path")

class Server {
    constructor(_port,isDev) {
        this.port = _port
        this.app = new Express()
        this.sockets = []
        this.expressWS = require("express-ws")(this.app);
        const appOptions = {
            root: path.join(__dirname)
        }
        
        this.app.get("/",(req,res) => {
            res.sendFile("src/index.html",appOptions)
        })
        if(isDev) {
            this.app.ws("/", (ws,req) => {
                
            })
        }
    }

    start() {
        this.app.listen(this.port,() => {
            console.log(`Listening at port ${this.port}`)
        })
        this
    }

    sendMessageToWS(msg) {
        if(isDev) {
            this.expressWS.getWss().clients.forEach((socket)=>{
                socket.send("refresh")
            })
        }
    }
}

exports.default = (port) => new Server(port)