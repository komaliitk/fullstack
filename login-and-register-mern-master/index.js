import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "./src/db/conn.js";
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema)

const careerSchema = new mongoose.Schema({
    title: String,
    description: String,
    lastdate: String,
    
});

const Career_user = new mongoose.model("career", careerSchema);




//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 



app.post("/career", (req, res)=> {
    // const { title,description} = req.body
    // Career_user.findOne({title: title}, (err, user) => {
    //     if(Career_user){
    //         res.send({message: "job  already registerd"})
    //     } else {
            const user = new Career_user({
                title:req.body.title,
                description:req.body.description,
                lastdate:req.body.lastdate,
            
            })

            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully posted job" })
                }
            })
        // }
    // })
    
}) 

app.listen(9002,() => {
    console.log("BE started at port 9002")
})