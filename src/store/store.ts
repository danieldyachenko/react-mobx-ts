import {observable, computed, action, runInAction, flow} from "mobx";

export interface Name {
    title: string
    first: string
    last: string
}

export interface IStore {
    name: Name
    fullName: string
    getName(): void
}

class Store implements IStore {

    @observable name: Name = {
        title: '',
        first: '',
        last: ''
    }

    @computed get fullName(): string {
        return `${this.name.title} ${this.name.first} ${this.name.last}`
    }

    getName = flow(function* () {
        try {
            const response  =  yield fetch('https://randomuser.me/api/')
            const json = yield response.json()
            runInAction(() => this.name = json.results[0].name)
        } catch (err) {
            console.log(err)
        }
    })
}

export const store = new Store()