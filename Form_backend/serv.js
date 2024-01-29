const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root7610",
    database:"signup"
});
// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

   app.post('/signup',(req,res)=>{
    
     const sql="INSERT INTO users (`name`,`email`,`password`) VALUES(?)";
     const values=[
         req.body.name,
         req.body.email,
         req.body.password 
    ]
     db.query(sql,[values],(err,data)=>{
         if(err){
             return res.json("Error");
         }
         console.log("working")
         return res.json(data);
         
     })
 })

 app.post('/userdetails',(req,res)=>{
    const sql="INSERT INTO users (`age`,`gender`,`dob`,`mobile`) VALUES(?)";
    const values=[
        req.body.age,
        req.body.gender,
        req.body.dob ,
        req.body.mobile
   ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
 })

 app.post('/login',(req,res)=>{
    
  const sql="SELECT * FROM users WHERE `email`=? AND `password`=?";
  db.query(sql,[req.body.email,req.body.password],(err,data)=>{
      if(err){
          return res.json("Error");
      }
      if(data.length>0){
        return res.json("Success");
      }
      else{
        return res.json("Failed")
      }
  })
})

app.listen(8081,()=>{
    console.log("listening");
})