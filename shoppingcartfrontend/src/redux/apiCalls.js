import { jamalRequest, publicRequest } from "../requestMethods"
import { logingStart, loginFailure, loginSuccess } from "./userRedux"
import { registrationFailed,registrationFinished,registrationProcess } from "./registrationredux"

export const login = async(dispatch,user)=>{
    dispatch(logingStart())
    try{
        const res = await jamalRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const register = async(dispatch,user)=>{
    dispatch(registrationProcess())
    try{
        const res = await jamalRequest.post("/auth/register",user)
        dispatch(registrationFinished(res))
     
     
    }catch(err){
        dispatch(registrationFailed())
     
    }
}