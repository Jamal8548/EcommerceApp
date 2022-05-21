const express = require('express')
const { verifyToken, verifyTokenAndAuthorization ,verifyTokenAndAdmin} = require('./verifyToken')
const router = express.Router()
const Cart = require("../models/Cart")



router.post("/",verifyToken,async(req,res)=>{

    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)

    }catch(err){
        res.status(500).json(err)

    }
})

//UPDATE
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
try{
const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
    $set:req.body
},{new:true})
res.status(200).json(updatedCart)

}catch(error){
    res.status(500).json(err)
}
})

//DELETE METHOD
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{

        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")

    }catch(err){
        res.status(500).json(err)
    }
})
//uskay code may dekho agar problem aye tw ye nechy wala router
//in video

//router.get("/find/:userId",verifyTokenAndAuthorization,async(req,res)=>{
    //try{ const product = await Product.find{(userId:req.params.id)}
//})

//GET USER CART
router.get("/find/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
      const CartData = await Cart.find({userId:req.params.id})
      res.status(200).json(CartData)

    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL 
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const carts = await Cart.find()
        res.status(200).json(carts)
    }catch(err){
    res.status(500).json(err)
    }
})
module.exports = router