import express from "express";//Thanks SanjaiMagilan for this thing
 const app = express();
 const PORT = 5000;
 app.get("/",(req,res)=>{
    res.send("Hello World");
 });
 app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`);
 })
