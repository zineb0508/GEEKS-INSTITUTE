import { createSlice } from '@reduxjs/toolkit'
import { ageUpAsync, ageDownAsync } from './ageThunk'

const initialState = {
  age: 20,
  loading: false,
}

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += action.payload
        state.loading = false
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age -= action.payload
        state.loading = false
      })
  },
})

export default ageSlice.reducer
