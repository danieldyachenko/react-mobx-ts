import {IUserStore, UserStore} from "./userStore";

export interface IRootStore {
    userStore: IUserStore
}

export class RootStore implements IRootStore{

    userStore: UserStore

    constructor() {
        this.userStore = new UserStore(this)
    }
}