import {createSlice} from '@reduxjs/toolkit';

const initialState: {text: string} = {
  text: 'Hello World!!!!!!!!!!!!!!',
};

export const newTextSlice = createSlice({
  name: 'newText',
  initialState,
  reducers: {
    setNewText(state, action) {
      state.text = action.payload.text;
    },
  },
});

const {actions} = newTextSlice;
export const {setNewText} = actions;
