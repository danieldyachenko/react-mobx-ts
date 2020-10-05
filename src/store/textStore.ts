import { RootStore } from './rootStore';
import { makeAutoObservable } from 'mobx';

export class TextStore {

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);
    }

    text: string = '';

    setText(text: string) {
        this.text = text;
    }
}

/* export const setText = action((state: ITextStore, newText: string) => {
    state.text = newText
}) */
