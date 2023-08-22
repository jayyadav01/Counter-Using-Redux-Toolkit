import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name : 'CounterExample',
    initialState : {
        counter : 0
    },
    reducers:{
        increment : function(state,action)
        {
            state.counter = state.counter + 1;
        },
        decrement : function(state,action)
        {
            state.counter = state.counter - 1;
        }
    }
})

export const { increment , decrement } = slice.actions;

const reducer = slice.reducer;
export default reducer
