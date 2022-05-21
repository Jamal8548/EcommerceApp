const { config } = require('dotenv')
const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const cors = require("cors")

config()

const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")

// app.get("/",(req,res)=>{
//     res.send("here we go")
// })
app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout",stripeRoute)

const port = process.env.PORT || 4000

async function main(){

    try {
        await connectDB(process.env.MONGO_URI)
        .then(()=>console.log("Mongo is connected"))
        app.listen(port, () =>
          console.log(`Server is listening on port ${port}...`)
        );
      } catch (error) {
        console.log(error);
      }
}

main()