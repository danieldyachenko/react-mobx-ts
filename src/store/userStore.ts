import { observable, computed, flow, makeObservable } from 'mobx';
import userService from '../services/userService';
import { RootStore } from './rootStore';
import { IUserStore, Name, Status } from './types';

export class UserStore implements IUserStore {
    constructor(public rootStore: RootStore) {
        makeObservable(this, {
            name: observable,
            status: observable,
            fullName: computed,
            getName: flow,
        });
    }

    //observable
    name: Name | null = null;
    status: Status = 'pending';
    error: string;

    //computed
    get fullName(): string {
        return `${this.name.title} ${this.name.first} ${this.name.last}`;
    }

    //flow
    *getName() {
        try {
            const response = yield userService.getName();
            const json = yield response.json();
            this.name = json.results[0].name;
            this.rootStore.textStore.text = this.fullName;
            this.status = 'done';
        } catch (error) {
            console.log(error);
            this.status = 'error';
            this.error = error.message
        }
    }
}
