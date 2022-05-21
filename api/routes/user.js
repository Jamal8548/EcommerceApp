const express = require('express')
const { verifyToken, verifyTokenAndAuthorization ,verifyTokenAndAdmin} = require('./verifyToken')
const router = express.Router()
const user = require("../models/User")

//UPDATE
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
if(req.body.password){
    req.body.password=CryptoJS.AES.encrypt(
        req.body.password, 
        process.env.PASS_SEC
        ).toString()
}
try{
const updatedUser = await user.findByIdAndUpdate(req.params.id, {
    $set:req.body
},{new:true})
res.status(200).json(updatedUser)

}catch(error){
    res.status(500).json(err)
}
})

//DELETE METHOD
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{

        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")

    }catch(err){
        res.status(500).json(err)
    }
})

//GET USER
router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{

      const userr = await user.findById(req.params.id)
      const {password, ...others}=userr._doc;
        res.status(200).json({...others})

    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL USER
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    const query = req.query.new
    try{

       const users = query? await user.find().sort({_id: -1}).limit(5):await user.find()
        res.status(200).json(users)

    }catch(err){
        res.status(500).json(err)
    }
})


//GET USER STATS

router.get("/stats", verifyTokenAndAdmin,async(req,res)=>{
    const date= new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

    try{

        const data = await user.aggregate([
            {$match: {createdAt:{$gte:lastYear}}},
            {
                $project:{
                    month:{$month:"$createdAt"}
                }
            },
            {
                $group:{
                    _id:"$month", //month_number
                    total:{$sum:1} //its gonna sum every register for specific month user because i wrote 1
                }
            }
        ])
        res.status(200).json(data)

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router