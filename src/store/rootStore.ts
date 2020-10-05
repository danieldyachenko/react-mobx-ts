import {UserStore} from "./userStore";
import {TextStore} from "./textStore";
import { IRootStore } from "./types";

export class RootStore implements IRootStore {

    userStore: UserStore
    textStore: TextStore

    constructor() {
        this.userStore = new UserStore(this)
        this.textStore = new TextStore(this)
    }
}