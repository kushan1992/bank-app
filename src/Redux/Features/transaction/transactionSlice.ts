import { createSlice } from "@reduxjs/toolkit";

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
const initialState: IInitialState = {
  accountBalance: 0,
  transaction: [],
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transaction.push(action.payload.transaction);
    },
    updateAccountBalance: (state, action) => {
      state.accountBalance = action.payload;
    }
  },
});

export const { addTransaction, updateAccountBalance } = transactionSlice.actions;

export default transactionSlice.reducer;
