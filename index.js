const express = require("express");
var cors = require("cors");
require("./db/config");
const Product = require("./db/Product");
const User = require("./db/User");
const jwt=require('jsonwebtoken')
const jwtkey='e-com';

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  jwt.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
    if(err){
     res.send({result:'something went wrong ,Please try after sometime'})
    }
     res.send({result,auth:token});


 })
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
        jwt.sign({user},jwtkey,{expiresIn:"2h"},(err,token)=>{
           if(err){
            res.send({reslt:'something went wrong ,Please try after sometime'})
           }
            res.send({user,auth:token});


        })
    } else {
      res.send("result not found");
    }
  } else {
    res.send("result not found");
  }
});

app.post("/add-product",verifyToken, async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

app.get("/products",verifyToken, async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send("No products found");
  }
});

app.delete("/product/:id",verifyToken, async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/product/:id",verifyToken, async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("No record found");
  }
});



app.put("/product/:id",verifyToken,async(req,res)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},
        {
            $set: req.body
        }
    )
    res.send(result)
})


app.get('/search/:key',verifyToken,async(req,res)=>{
    let result= await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {price:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},

        ]
    })
    res.send(result)
})
function verifyToken(req,res,next){
    let  token=req.headers['authorization']
    if(token){
        token=token.split(' ')[1]
        jwt.verify(token,jwtkey,(err,valid)=>{
           if(err){
          res.status(401).send({reslt:"please provide valid token"})
           }else{
            next()
           }
        })
    }else{
        res.status(403).send({result:"please add token with header"})
    }
}
app.listen(5000);
