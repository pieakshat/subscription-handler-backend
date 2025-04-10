import express from "express";

import { PORT } from './config/env.js';

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDb from "./Database/mongodb.js";

const app = express()

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Welcom to the subcription tracker API');
})

app.listen(PORT, async () => {
    console.log(`server running on http://localhost:${PORT}`);

    await connectToDb();
})

export default app; 