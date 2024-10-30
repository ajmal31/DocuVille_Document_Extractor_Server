import express from "express"
import cors from "cors"
import helmet from "helmet"
import { PORT } from "./utils/const.js"
import routes from "./Routes/routes.js"
import morgan from "morgan"

const app=express()
app.use(helmet())

app.use(morgan("dev"))

app.use(cors({origin:["http://localhost:5173","http://localhost:3000"]}))

app.use("/api/v1",routes(express))

app.listen(PORT,()=>{
    console.warn(`server Listening on port ${PORT}`)
})
