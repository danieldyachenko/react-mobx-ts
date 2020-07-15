import React, {Component} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./index";

@observer export default class App extends Component {

    static contextType = StoreContext;

    componentDidMount() {
        this.context.getName()
    }

    render() {
        return (
            <>
                <h2>{this.context.name ? this.context.fullName : 'Loading...'}</h2>
                <button onClick={() => this.context.getName()}>Get name</button>
            </>
        )
    }
}