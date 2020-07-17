import React, {createContext} from "react";
import {IRootStore, RootStore} from "./rootStore";
import { useLocalStore } from 'mobx-react'

export const storeContext = createContext<IRootStore>(null as IRootStore)

export const StoreProvider = ({ children }: {children: JSX.Element}) => {
    const store = useLocalStore(() => ({...new RootStore()}))
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {

    const store = React.useContext(storeContext)

    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.')
    }

    return store
}