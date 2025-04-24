import express from "express";

import { PORT } from './config/env.js';

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDb from "./Database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";


const app = express()

// allows app to handle json data sent in requests
app.use(express.json());

// process the forms data sent via the html forms 
app.use(express.urlencoded({ extended: false }));

// reads cookies from incoming requests 
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use(errorMiddleware);
app.use(arcjetMiddleware);

app.get('/', (req, res) => {
    res.send('Welcom to the subcription tracker API');
})

app.listen(PORT, async () => {
    console.log(`server running on http://localhost:${PORT}`);

    await connectToDb();
})

export default app; 