import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { delto } from "../slices/tslice";
import { UseDispatch } from "react-redux";
import { useContext } from "react";
import { globalContext } from "../GlobalContext";
import { useEffect } from "react";


const Display=()=>{

    const {del,state,getthem}=useContext(globalContext);

    useEffect(()=>{
        getthem();
    },[]);
    
  console.log(state.arr);

    const fun=(data)=>{
       let obj=del(data);
    //    console.log(obj);
    //    dis(obj);
    }

  

    // const se=useSelector(data=>data.todo);
    return(
        <div className="text-center bg-light shadow">
            <h2 className="display-2">List</h2>
            <div className="mt-4 mx-auto">

                {/* {arr.length==0 && <p className="text-danger">NO TODO</p>} */}
                

            {
           state.arr.map((i,index)=>{
                return <div><h3 key={index}>{index+1} {i.todo} <button className="btn btn-danger" onClick={()=>fun(i._id)}>del</button></h3> </div>
            })
          }

            </div>
         
            
        </div>
    )
}

export default Display;