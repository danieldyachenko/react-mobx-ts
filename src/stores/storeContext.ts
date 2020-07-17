import {createContext} from "react";
import {IRootStore} from "./rootStore";

export default createContext<IRootStore>(null as IRootStore)