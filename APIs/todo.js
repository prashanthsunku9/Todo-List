const exp=require('express');
const expressAsyncHandler = require('express-async-handler');
const Tapp=exp.Router();
const objectId=require('mongodb').ObjectId;

Tapp.use(exp.json());


Tapp.get('/',(req,res)=>{
    res.send({message:"this is Tapp"});
})

Tapp.post('/post',expressAsyncHandler(async(request,response)=>{



    let obj=request.body;
    console.log(obj);

    const Tcoll=request.app.get('Tcoll');

    await Tcoll.insertOne(obj);

    

    // console.log(res.data);

    response.send({message:"todo added successfully",payload:obj});


}));

Tapp.delete('/get/:id',expressAsyncHandler(async(request,response)=>{

    const ind=request.params.id;
    console.log(ind);
    const Tcoll=request.app.get('Tcoll');

    const query={_id:new objectId(ind)};
    await Tcoll.deleteOne(query);

    response.send({message:"todo has been deleted successfully"});
}))


Tapp.get('/get',expressAsyncHandler(async(request,response)=>{

    const Tcoll=request.app.get('Tcoll');


    let hey=await Tcoll.find().toArray();
    // console.log(res.data);

    response.send({message:"return todo successfully",payload:hey});


}));




module.exports=Tapp;