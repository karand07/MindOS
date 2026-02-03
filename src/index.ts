import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const port:number=3000;
const app = express()

app.use(cors({}))
app.use(express.json())

async function main(){
    await mongoose.connect(process.env.MONGO_URL as string)
    app.listen(port,()=>console.log(`server is running on port ${port}`))
}
main();
