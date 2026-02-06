import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";
import { SignupRoute } from './routers/auth/signup.route.js';
import { SignInRoute } from './routers/auth/signin.route.js';
const port = 3000;
const app = express();
const mongoUrl = process.env.MONGO_URL || '';
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));
app.use(express.json());
app.use('/auth', SignupRoute);
app.use('/auth', SignInRoute);
async function main() {
    if (!mongoUrl)
        throw new Error('MONGO_URL environment variable is not set');
    await mongoose.connect(mongoUrl);
    app.listen(port, () => console.log(`server is running on port ${port}`));
}
main();
//# sourceMappingURL=index.js.map