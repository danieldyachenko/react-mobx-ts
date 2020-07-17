import {RootStore} from "./rootStore";
import {action, observable} from "mobx";

export interface ITextStore {
    text: string
    setText(text: string): void
}

export class TextStore {

    private _rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this._rootStore = rootStore
    }

    @observable text: string = ''

    @action setText(text: string) {
        this.text = text
    }

}