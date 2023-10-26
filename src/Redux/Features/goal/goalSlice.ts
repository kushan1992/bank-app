import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../../Interfaces/Redux/GoalSlice";

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
