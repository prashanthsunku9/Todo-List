export const reducer=(state,action)=>{
        switch(action.type){
            case 'ADD':
             return {
                ...state,
                arr:[...state.arr,{todo:action.payload}],
                // arr:action.payload,
                isloading:false,
                isError:false
             }
             case 'DEL':
                return{
                    arr:state.arr.filter(i=>i._id!=action.payload),
                    isloading:false,
                    isError:false
                }
             case 'GET':
                return{
                    arr:action.payload,
                    isloading:false,
                    isError:false
                }
             default:
                return {
                    isloading:true,
                    isError:true
                }
        }
}