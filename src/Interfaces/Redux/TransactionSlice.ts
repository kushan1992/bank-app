export interface ITransaction {
    id: string,
    amount: number,
    remark?: string,
    type: string,
    date: string
}

export interface IInitialState {
    accountBalance: number,
    transaction: ITransaction[]
}