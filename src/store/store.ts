import {observable, computed, action} from "mobx";

export interface Name {
    title: string
    first: string
    last: string
}

export interface IStore {
    name: Name
    fullName: string
    getName(): void
    setName(name: Name): void
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

    @action getName(): void {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(json => this.setName(json.results[0].name))
    }

    @action setName(name: Name): void {
        this.name = name
    }
}

export const store = new Store()