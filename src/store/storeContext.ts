import {createContext} from "react";
import {IStore, store} from "./store";

export default createContext<IStore>(store)