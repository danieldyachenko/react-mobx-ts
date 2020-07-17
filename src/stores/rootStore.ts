import {IUserStore, UserStore} from "./userStore";
import {ITextStore, TextStore} from "./textStore";

export interface IRootStore {
    userStore: IUserStore
    textStore: ITextStore
}

export class RootStore implements IRootStore {

    userStore: UserStore
    textStore: TextStore

    constructor() {
        this.userStore = new UserStore(this)
        this.textStore = new TextStore(this)
    }
}