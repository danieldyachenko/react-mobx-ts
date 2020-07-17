import React from "react";
import {useObserver} from "mobx-react"
import {useStore} from "../../store/store";

export default function() {

    const {textStore} = useStore();

    return useObserver(() => (
        <div>
            <input
                type="text"
                name="textInput"
                onChange={event => textStore.setText(event.target.value)}
            /><br/>
            <span>{textStore.text}</span>
        </div>
    ))
}