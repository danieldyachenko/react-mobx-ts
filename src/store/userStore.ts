import {observable, computed, flow, makeObservable} from "mobx";
import userService from "../services/userService";
import {RootStore} from "./rootStore";
import { IUserStore, Name } from "./types";

export class UserStore implements IUserStore {

    constructor(public rootStore: RootStore) {
        makeObservable(this, {
            name: observable,
            fullName: computed,
            getName: flow
        })
    }

    name: Name | null = null

    get fullName(): string {
        return `${this.name.title} ${this.name.first} ${this.name.last}`
    }

    *getName() {
        try {
            const response  =  yield userService.getName()
            const json = yield response.json()
            this.name = json.results[0].name
            this.rootStore.textStore.text = this.fullName
        } catch (err) {
            console.log(err)
        }
    }
}
