const getWala=((req,res)=>{
    
    res.send("here we go again jaaa")
})

const postWala=((req,res)=>{
   
    const username = req.body.name;
    res.send("your user name is " + username)
    console.log(username)

})

module.exports = {getWala,postWala}