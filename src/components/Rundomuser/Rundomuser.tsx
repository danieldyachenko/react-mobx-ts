import React, {useContext, useEffect} from "react";
import StoreContext from "../../stores/storeContext"
import {useObserver} from "mobx-react"

export default () => {

    const store = useContext(StoreContext);

    useEffect(() => {
        store.userStore.getName()
    }, [])

    return useObserver(() => (
        <>
            <h2>{store.userStore.name ? store.userStore.fullName : 'Loading...'}</h2>
            <button onClick={() => store.userStore.getName()}>Get name</button>
        </>
    ))
}