import {createSlice} from "@reduxjs/toolkit";

const regRedux = createSlice({
    name:"registration",
    initialState:{
        isFetching:false,
        error:false,
        result:{}
    },
    reducers:{
        registrationProcess:(state)=>{
            state.isFetching=true
          
        },
        registrationFinished:(state,action)=>{
            state.isFetching=false
            state.result=action.payload

        },
        registrationFailed:(state)=>{
            state.isFetching=false
            state.error=true
        },
      
    }
})

export const {registrationProcess,registrationFinished,registrationFailed} = regRedux.actions
export default regRedux.reducer