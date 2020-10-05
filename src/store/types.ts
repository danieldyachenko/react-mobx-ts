export interface IRootStore {
    userStore: IUserStore
    textStore: ITextStore
}

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

export interface ITextStore {
    text: string;
    setText(text: string): void;
}