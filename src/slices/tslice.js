import { createSlice } from "@reduxjs/toolkit";


const tslice=createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addto:(state,action)=>{
            state.push(action.payload)
        },
        delto:(state,action)=>{
          return state.filter(i=>i!=action.payload);
        }
       
    }
    
})

export default tslice.reducer;
export const {addto}=tslice.actions;
export const {delto}=tslice.actions;