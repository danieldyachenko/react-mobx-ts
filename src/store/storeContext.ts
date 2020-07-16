import {createContext} from "react";
import {IStore, Store} from "./store";

export default createContext<IStore>(new Store)