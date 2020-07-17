import React, {useContext} from "react";
import StoreContext from "../../stores/storeContext"
import {useObserver} from "mobx-react"

const TextInput = () => {

    const {textStore} = useContext(StoreContext);

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

export default TextInput