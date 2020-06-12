import "core-js/stable/object/assign"  // safari 9 polyfill Object.assign
import "core-js/stable/object/entries"  // safari 9 polyfill Object.entries
import "core-js/stable/object/values" // safari 9 polyfill Object.values
import 'url-search-params-polyfill'; //safari 9 polyfill new URLSearchParams
import "regenerator-runtime/runtime" // For core-js
import ReactDOM from "react-dom"
import React from "react"
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";

const react = document.getElementById("react")
ReactDOM.render(<BrowserRouter>
                <App/>
</BrowserRouter>,react)

//Used for dev auto-refresh

const socket = new WebSocket("ws://"+window.location.host)

socket.addEventListener("open", (e) => {
    socket.send("open")
})

socket.addEventListener("message",(e) => {
    if(e.data === "refresh") {
        window.location.reload()
    }
})