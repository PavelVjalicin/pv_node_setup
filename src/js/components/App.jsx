import React, {Component} from "react"
import css from "./App.module.scss"
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <>
            <div className={css.red}>Hello world</div>
        </>
    }
}

export {App}