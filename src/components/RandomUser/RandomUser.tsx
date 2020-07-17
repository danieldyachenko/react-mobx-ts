import React, {useEffect} from "react";
import {useObserver} from "mobx-react"
import {useStore} from "../../store/store";

export default function() {

    const {userStore} = useStore();

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