import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";
const port = 3000;
const app = express();
const mongoUrl = process.env.MONGO_URL || '';
app.use(cors({}));
app.use(express.json());
async function main() {
    if (!mongoUrl)
        throw new Error('MONGO_URL environment variable is not set');
    await mongoose.connect(mongoUrl);
    app.listen(port, () => console.log(`server is running on port ${port}`));
}
main();
//# sourceMappingURL=index.js.map