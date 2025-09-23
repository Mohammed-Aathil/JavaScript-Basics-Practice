import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
userId: {
    type: String,
    unique: true,
    required: true 
},
name: {
    type: String,
    required: true
},
role: {
    type: String,
    enum: ["Admin", "Member", "Guest"],
}
});

const User = mongoose.model("User", userSchema);
export default User;
