import { Schema, model } from "mongoose";

// create a schema for contact
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
}, {
    timestamps: true,
});

export const userModel = model('user', userSchema)