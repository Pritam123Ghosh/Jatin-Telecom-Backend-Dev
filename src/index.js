import express from 'express';
import connectDB from './db/dbConnect.js';
import authRouter from './routes/auth.route.js';

connectDB();
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

app.use("/api/v1/auth", authRouter);