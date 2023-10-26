import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
    goal: number,
}
const initialState: IInitialState = {
    goal: 0,
}

const goalSlice = createSlice({
    name: "goal",
    initialState,
    reducers: {
        updateGoal: (state, action) => {
            state.goal = action.payload;
        }
    },
});

export const { updateGoal } = goalSlice.actions;

export default goalSlice.reducer;
