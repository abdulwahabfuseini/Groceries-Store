import { Schema, model, models } from "mongoose";


const BillingSchema = new Schema({
    fullName: {
        required: [true, "FullName is required"],
        type: String
    },
    email: {
        required: [true, "Email is required"],
        type: String,
        unique: true,  
        trim: true
    },
    phoneNumber: {
        required: [true, "PhoneNumber is required"],
        type: String
    },
    city: {
        required: [true, "City is required"],
        type: String
    },
    street: {
        required: [true, "Street is required"],
        type: String
    },
    postalAddress: {
        required: [true, "PostalAddress is required"],
        type: String
    },
    zipCode: {
        required: [true, "ZipCode is required"],
        type: String
    },
}, {timestamps: true})

const BillingDetails = models.BillingDetails || model("BillingDetails", BillingSchema)


export default BillingDetails