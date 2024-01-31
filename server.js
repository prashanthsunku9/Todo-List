const exp=require('express');
const app=exp();
const Tapp=require('./APIs/todo');
const path=require('path');
const mClient=require('mongodb').MongoClient;


const dburl="mongodb+srv://admin:admin@cluster0.w1yw0q0.mongodb.net/?retryWrites=true&w=majority"

mClient.connect(dburl)
.then((client)=>{

    const datab=client.db('datab');

    const Tcoll=datab.collection('Tcoll');
    app.set('Tcoll',Tcoll);

    console.log("database has connected successfully");

},(err)=>{
    console.log("error has occured in connecting the database");
})

app.use('/todo',Tapp);

app.use(exp.static(path.join(__dirname,'./build')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'));
})

app.use((req,res,next)=>{
    console.log({message:"invalid path"});
})

app.use((err,req,res,next)=>{
    console.log({message:"synchronised error"});
})














app.listen(4000,()=>{
    console.log("server started successfully");
})