import express from 'express'
import cors from 'cors'
import init from './src/routers/index'
require('dotenv').config()
require('./src/connecting_db')
const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL, // the client url to allow access from
    methods:['GET','PUST','DELETE','POST']
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

init(app)



const PORT = process.env.PORT || 5000
const listener = app.listen(PORT,()=>{
    console.log("server is running on the port"+listener.address().port);
})