import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    Love:(state , action)=>{
      state.value = action.payload
    },
    lovely:(state , action)=>{
      state.value = action.payload
    },
  },
})


export const {Love , lovely} = counterSlice.actions

export default counterSlice.reducer
