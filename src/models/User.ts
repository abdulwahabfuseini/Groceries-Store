import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        required: [true, "Username is required"],
        type: Schema.Types.String
    },
    email: {
        required: [true, "Email is required"],
        type: Schema.Types.String,
        unique: true,  
        trim: true
    },
    password: {
        required: [true, "Password is required"],
        type: Schema.Types.String
    },
}, {timestamps: true})

const User = models.User || model("User", UserSchema)

export default User