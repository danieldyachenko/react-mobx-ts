import React, {useContext, useEffect} from "react";
import {useObserver} from "mobx-react";
import StoreContext from "./store/storeContext"

export default () => {

    const store = useContext(StoreContext);

    useEffect(() => {
        store.getName()
    }, [])

    return useObserver(() => (
        <>
            <h2>{store.name ? store.fullName : 'Loading...'}</h2>
            <button onClick={() => store.getName()}>Get name</button>
        </>
    ))
}