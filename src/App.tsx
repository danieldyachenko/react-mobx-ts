import React, {Component, useContext, useEffect} from "react";
import {observer} from "mobx-react";
import StoreContext from "./store/storeContext"

export default observer(() => {

    const store = useContext(StoreContext);

    useEffect(() => {
        store.getName()
    }, [])

    return (
        <>
            <h2>{store.name ? store.fullName : 'Loading...'}</h2>
            <button onClick={() => store.getName()}>Get name</button>
        </>
    )
})