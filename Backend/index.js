const express=require("express");
const app=express();
const dotenv=require("dotenv");
const router=require("./routes/route.js")
//we need to include env file only in serverjs 
dotenv.config();


//to connect backend to database
const connectdb=require("./DBconnection/conn");
connectdb();

app.use(express.json());

app.use(router);


const port=process.env.PORT;

app.listen(port,(()=>{
    console.log(`server is running on port ${port}`);
}));
