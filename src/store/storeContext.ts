import {createContext} from "react";
import {IStore} from "./store";

export default createContext<IStore>(null as IStore)