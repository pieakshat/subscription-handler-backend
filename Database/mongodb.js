import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new Error("please define mongoDb URI inside .env.local or .env.production")
}

const connectToDb = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode`);
    } catch {
        console.error('Error connecting to the database: ', error);
        process.exit(1);
    }
}

export default connectToDb; 