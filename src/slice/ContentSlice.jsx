import React from 'react'
import axios from "axios"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState={
    contents: [],
    isLoading: false,
    error: null,
}

export const fetchContent = createAsyncThunk(
    'contents/fetchContent',
    async () => {
      const res = await axios('https://fakestoreapi.com/products')
      const data = await res.data
      return data
    }
  )

export const ContentSlice=createSlice({
  name:"content",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchContent.pending,(state)=>{
      state.isLoading=true
    })
    builder.addCase(fetchContent.fulfilled,(state,action)=>{
      state.isLoading=false
      state.contents=action.payload
      
    })
    builder.addCase(fetchContent.rejected,(state,action)=>{
      state.error=action.error.message
    })

  },

})

export default ContentSlice.reducer
