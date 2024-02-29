import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
    list: Array<string>;
}

const initialState: TodoState = {
    list: [],
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addition: (state, action: PayloadAction<string>) => {
            state.list.push(action.payload);
        },
        deletion: (state, action: PayloadAction<number>) => {
            state.list.splice(action.payload, 1);
        },
    },
});

export const { addition, deletion } = todoSlice.actions;
export default todoSlice.reducer;