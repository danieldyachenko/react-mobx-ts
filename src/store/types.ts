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
    status: Status
    fullName: string
    error: string
    getName(): void
}

export interface ITextStore {
    text: string;
    setText(text: string): void;
}

export type Status = 'pending' | 'done' | 'error';