import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        required: [true, "Username is required"],
        type: String
    },
    email: {
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"],
        type: String,
        unique: true,  
        trim: true
    },
    password: {
        required: [true, "Password is required"],
        type: String
    },
}, {timestamps: true})

const User = models.User || model("User", UserSchema)

export default User