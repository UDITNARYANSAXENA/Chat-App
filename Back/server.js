import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import messaageRoutes from "./routes/message.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./db/connecttomongodb.js";



 const app = express();
 const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messaageRoutes )
app.use("/api/users", userRoutes)
// app.get("/",(req,res)=>{
//     //root route : http://localhost:5000
//     res.send("hello world");
// })


app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
    
});