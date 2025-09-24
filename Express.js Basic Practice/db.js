import mongoose from "mongoose";
const connectDb = async () => {
    await mongoose.connect(
        "mongodb+srv://Mohammed-Aathil-J:sCjYtW6vkew8Rccr@cluster0.32ytf5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DataBase Connection Successfully");
};

export default connectDb;
