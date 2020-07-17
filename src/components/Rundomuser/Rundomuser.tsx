import React, {useContext, useEffect} from "react";
import StoreContext from "../../stores/storeContext"
import {useObserver} from "mobx-react"

const Rundomuser = () => {

    const {userStore} = useContext(StoreContext);

    useEffect(() => {
        userStore.getName()
    }, [])

    return useObserver(() => (
        <div>
            <h2>{userStore.name ? userStore.fullName : 'Loading...'}</h2>
            <button onClick={() => userStore.getName()}>Get name</button>
        </div>
    ))
}

export default Rundomuser