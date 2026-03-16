import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import "dotenv/config";
import { SignupRoute } from './routers/auth/signup.route.js';
import { SignInRoute } from './routers/auth/signin.route.js';
import { contentRoute } from './routers/content/content.router.js';
import { linkRoute } from './routers/link/link.route.js';

const port=process.env.PORT;
const app = express()
const mongoUrl=process.env.MONGO_URL || ''
app.use(cors(
  {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
  }
));

app.use(express.json())

app.use('/auth',SignupRoute)
app.use('/auth',SignInRoute)
app.use('/content',contentRoute)
app.use('/brain',linkRoute)
async function main(){
    if (!mongoUrl) throw new Error('MONGO_URL environment variable is not set')
    await mongoose.connect(mongoUrl)
    app.listen(port,()=>console.log(`server is running on port ${port}`))
}
main();
