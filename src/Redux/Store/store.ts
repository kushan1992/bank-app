import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../Features/transaction/transactionSlice";
import goalSlice from "../Features/goal/goalSlice";

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    goal: goalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
