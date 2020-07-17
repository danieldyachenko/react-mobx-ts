import {observable, computed, flow} from "mobx";
import {RootStore} from "./rootStore";

export interface Name {
    title: string
    first: string
    last: string
}

export interface IUserStore {
    name: Name | null
    fullName: string
    getName(): void
}

export class UserStore implements IUserStore {

    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }

    @observable name: Name | null = null

    @computed get fullName(): string {
        return `${this.name.title} ${this.name.first} ${this.name.last}`
    }

    getName = flow(function* (this: UserStore) {
        try {
            const response  =  yield fetch('https://randomuser.me/api/')
            const json = yield response.json()
            this.name = json.results[0].name
        } catch (err) {
            console.log(err)
        }
    })
}