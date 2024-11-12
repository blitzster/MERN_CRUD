import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });  // This ensures that dotenv will look for .env in the parent directory

// console.log("MongoDB URI from .env:", process.env.MONGO_URI);  // Debugging output

import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);  // Exit with failure
    }
}
