import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../../Interfaces/Redux/TransactionSlice";
import { transactionData } from "../../../Data/TransactionData";

const initialState: IInitialState = {
  accountBalance: 1000,
  transaction: transactionData,
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
