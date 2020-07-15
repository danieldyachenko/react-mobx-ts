import {observable, computed, action, autorun, configure} from "mobx";
import {Name} from "./types";

class Store {

    @observable private name: Name | null = null

    @computed get fullName(): string {
        return `${this.name.title} ${this.name.first} ${this.name.last}`
    }

    @action getName(): void {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(json => this.setName(json.results[0].name))
    }

    @action private setName(name: Name): void {
        this.name = name
    }
}

export default new Store()