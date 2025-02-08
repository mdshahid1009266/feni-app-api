import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.MONGODB_URI;

const connection = async () => {
    try {
        await mongoose.connect(URL);
        console.log("database connected");
    } catch (error) {
        console.log(error.message);
    }
}
export default connection;

