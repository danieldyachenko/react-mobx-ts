import {observable, computed, flow} from "mobx";

export interface Name {
    title: string
    first: string
    last: string
}

export interface IStore {
    name: Name | null
    fullName: string
    getName(): void
}

export class Store implements IStore {

    @observable name: Name | null = null

    @computed get fullName(): string {
        return `${this.name.title} ${this.name.first} ${this.name.last}`
    }

    getName = flow(function* (this: Store) {
        try {
            const response  =  yield fetch('https://randomuser.me/api/')
            const json = yield response.json()
            this.name = json.results[0].name
        } catch (err) {
            console.log(err)
        }
    })
}