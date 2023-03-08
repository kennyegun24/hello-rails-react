import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    greetings: [],
    status: null
}

export const getGreetings = createAsyncThunk('greeting/getGreetings', async () => {
    const response = await fetch('api/v1/greetings');
    const data = await response.json();
    console.log(data)
    return data;
});

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {
        // Greeting(state, action) {
        //     state.push(action.payload);
        // },
    },
    extraReducers(reduce) {
        // [getGreetings.fulfilled]: (state, action) => action.payload,
        reduce
            .addCase(getGreetings.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.status = 'Fulfilled'
                isFulfilled.greetings = action.payload
            })
    },
});

// export const { Greeting } = greetingReducer.actions;
export default greetingSlice.reducer;