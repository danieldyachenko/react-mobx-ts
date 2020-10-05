import React, {createContext, useContext} from "react";
import {RootStore} from "./rootStore";
import { useLocalStore } from 'mobx-react'
import { IRootStore } from "./types";

const StoreContext = createContext<IRootStore>(null as IRootStore)

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
    const store = useLocalStore(() => ({ ...new RootStore() }))
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext)


