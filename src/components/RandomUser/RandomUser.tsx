import React, {useEffect} from "react";
import {observer} from "mobx-react"
import {useStore} from "../../store/store";

const RandomUser = observer(() => {

    const {userStore} = useStore();

    console.log('RandomUser')

    useEffect(() => {
        userStore.getName()
        console.log('useEffect')
    }, [userStore])

    return (
        <div>
            <h2>{userStore.name ? userStore.fullName : 'Loading...'}</h2>
            <button onClick={() => userStore.getName()}>Get name</button>
        </div>
    )
})

export default RandomUser