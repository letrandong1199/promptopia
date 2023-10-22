import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
    mongoose.get('strictQuery', true);

    if (isConnected) {
        console.log('Mongoose is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useUnifiedTopology: true
        });

        isConnected = true;

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}