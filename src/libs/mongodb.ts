import mongoose from "mongoose";
import { env } from "process";


const MongoDB = process.env.MONGO_URI || ""

const connectMongoDb = async () => {
    try {
        await mongoose.connect(MongoDB)
        console.log("MongoDB connected")
    }catch(e){
        console.log(e)
    }
}

export default connectMongoDb