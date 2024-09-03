const express =require("express")
  const app = express();
  const port = 3000;
  const data=require("./Data/MOCK_DATA.json")


/////////////////////////////////////////////////////////
//   app.get("/api/users",(req,res)=>{
//     res.json(data)
//   })
////////////////////////////////////////////////////////
//   app.get("/users",(req,res)=>{
//     const html=`
//     <ul>
//         ${data.map((user)=>
//            `<li>${user.first_name}</li>` ).join("")}
    
//     </ul>
//     `;
//     res.send(html);
        
//   })

// app.get("/api/user/:id",(req,res)=>{
//     const id= Number(req.params.id);
//     const user= data.find((data)=>data.id===id);
//     return res.json(user)
// })


// app.put("/api/createuser",(req, res)=>{
//     return res.json({status:"pending"})
// })

// app.patch("/api/user/:id",(req, res)=>{
//     return res.json({status:"pending"})
// })

// app.delete("/api/user/:id",(req, res)=>{
//     return res.json({status:"pending"})
// })


app.route("/api/users/:id").get((req, res)=>{
    return res.json({status:"pending"})
})
.patch((req,res)=>{
    return res.json({status:"pending"})
})
.put((req,res)=>{
    return res.json({status:"pending"})
})
.delete((req,res)=>{
    return res.json({status:"pending"})
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
  })