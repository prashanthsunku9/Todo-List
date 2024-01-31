import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UseDispatch, useDispatch } from "react-redux";
import { addto } from "../slices/tslice";
import { globalContext } from "../GlobalContext";



const Home=(props)=>{

    const {register,handleSubmit,formState:{errors},reset}=useForm();
 

    const {addto}=useContext(globalContext);
   
    // const [sta,nsta]=useState([]);
    const fun=(data)=>{
        
        // const obj=addto(data.todo);
        // dis(obj);
        addto(data.todo);
        console.log(data);
        reset();
    }
    return(
        <div>
            <h3 className="display-3 mb-3">Todo Form</h3>
            <form  style={{width:"300px",height:"30px"}} className="bg-light shadow" onSubmit={handleSubmit(fun)}>
                <div className="form-floating mb-3">
                    <input type="text" id="todo" className="form-control" placeholder="Enter todo" {...register("todo",{required:true})}/>
                    {errors.todo?.type==='required' && <p className="text-danger">pls enter todo</p>}
                    <label htmlFor="todo" className="form-label">Enter todo</label>
                </div>
                <button className="btn btn-success" type="sumbit">click here</button>
                 </form>

            
          {/* <button>helo</button> */}
        </div>

    )
}
export default Home;