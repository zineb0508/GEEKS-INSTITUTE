import { createAsyncThunk } from '@reduxjs/toolkit'

export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000)
  })
})

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000)
  })
})
