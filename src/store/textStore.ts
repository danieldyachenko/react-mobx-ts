import { RootStore } from './rootStore';
import { makeAutoObservable } from 'mobx';

export class TextStore {

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);
    }

    //observable
    text: string = '';

    //action
    setText(text: string) {
        this.text = text;
    }
}
