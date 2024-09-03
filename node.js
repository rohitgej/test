// const {math2,sub}=require("./math")
// const { error } = require("console")

// const http= require("http")
// const fs = require("fs")
// const { error } = require("console")

// const myserver= http.createServer((req,res)=>{

//     res.end(
//        fs.unlink("./text2.txt",(error))
//     )
// })

// myserver.listen(3000,"localhost",()=>{
//     console.log("server is running on port 3000");
// })

// console.log(sub(2,5));

// console.log((math2(5,8)));

///////////////////////////////////////////////////////////

// const fs=require("fs")

///////////////////////////////////////////////////////////

// fs.writeFileSync("./text.txt","hey rohit")

// fs.writeFile("./text.txt","rohit",(error))

////////////////////////////////////////////////////////////

// const read=fs.readFileSync("./text.txt","utf-8")

// console.log(read);

/////////////////////////////////////////////////////////////

// fs.readFile("./text.txt","utf-8",(error,result)=>{
//     if(error) error(error)
//     else console.log(result);
 
// })

////////////////////////////////////////////////////////////

// fs.appendFileSync("./text.txt",`${Date.now()} my log\n`)

// fs.appendFile("./text.txt",`${Date.now()} new\n`,(error)=>{
//     if(error) error(error)
//     else console.log("file updated");
// })

///////////////////////////////////////////////////////////

// fs.unlinkSync("./text.txt")

//////////////////////////////////////////////////////////

// fs.writeFile("./text.txt","new file",(error)=>{
//     if(error) error(error)
//     else console.log("file created");
// })

// fs.writeFileSync("./text2.txt","")

////////////////////////////////////////////////////////////

// fs.unlink("./text2.txt",(error)=>{
//     if(error) error(error)
//     else console.log("file deleted");
// })

// const http = require("http");
// const express = require("express")

// const app = express()

// app.get("/",(req,res)=>{
//     res.end("Hello World")
// })

// app.get("/about",(req,res)=>{
//     res.end("About page")
// })
// const myserver = http.createServer(app)
// myserver.listen(3000,()=>{console.log("server is listening on 3000")});


const express=require("express")

const app=express()
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.listen(3000,()=>{
    console.log("server is listening on 3000")
})

