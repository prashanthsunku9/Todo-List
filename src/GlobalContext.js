import { createContext } from "react"
import { reducer } from "./reducer";
import { useReducer } from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

let initialState={
    arr:[],
    isloading:false,
    isError:false
}

export const globalContext=createContext(initialState);




export const GlobalProvider=({children})=>{

    
const [state,dispatch]=useReducer(reducer,initialState);

   

     const addto=async(data)=>{
        
       let obj={
        todo:data
       }
     
 
        try{
            console.log(data);
            let res=await axios.post('http://localhost:4000/todo/post',obj);
            console.log(res);
            dispatch({
                type:'ADD',
                payload:res.data.payload.todo
            })
        }catch(err){
            dispatch({
                type:'Def',
                payload:err.response
            })

        }
    
}

   const del=async(data)=>{

         await axios.delete(`http://localhost:4000/todo/get/${data}`);
                  
        dispatch({
            type:'DEL',
            payload:data
        })
   }
   async function getthem(){

    try{

        let res= await axios.get('http://localhost:4000/todo/get');
        console.log(res);
        dispatch({
           type:'GET',
           payload:res.data.payload
        })

    }catch(err){
        dispatch({
            type:"def",
            payload:err.message
        })
    }

   } 
 



    return(
        <globalContext.Provider value={{addto,del,state,getthem}}>
         {children}
        </globalContext.Provider>

    )
}