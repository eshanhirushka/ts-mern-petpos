import mongoose from "mongoose";

const connectDB = (url: string) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log(error));
}

export default connectDB;