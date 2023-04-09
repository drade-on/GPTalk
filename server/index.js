import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

import {Configuration, OpenAIApi} from "openai"
import openAiRoutes from "./routes/openai.js"


// CONFIG

dotenv.config()
 const app = express()
 app.use(express.json())
 app.use(helmet())
 app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
 app.use(morgan("common"))
 //"extended:true" part seems not to be required; line under is just in case
//  app.use(bodyParser.json({limit:"30mb",extended:true}))
 app.use(bodyParser.json({limit:"30mb"}))
 app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
 app.use(cors())

// OPENAI CONFIG

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
})
export const  openai = new OpenAIApi(configuration)

// ROUTES
app.use("/openai", openAiRoutes)

// SERVER SETUP

 const PORT = process.env.PORT || 9000
 app.listen(PORT, ()=>{
    console.log(`Example app listening at http://localhost:${PORT}`)
 })