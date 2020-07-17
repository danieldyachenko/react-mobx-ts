import React, {useContext, useEffect} from "react";
import StoreContext from "../../stores/storeContext"
import {useObserver} from "mobx-react"

export default () => {

    const rootStore = useContext(StoreContext);

    useEffect(() => {
        rootStore.userStore.getName()
    }, [])

    return useObserver(() => (
        <div>
            <h2>{rootStore.userStore.name ? rootStore.userStore.fullName : 'Loading...'}</h2>
            <button onClick={() => rootStore.userStore.getName()}>Get name</button>
        </div>
    ))
}