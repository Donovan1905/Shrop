import mongoose, { Model } from "mongoose";

interface IUser extends Document {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    token: string,
};

const userSchema = new mongoose.Schema<IUser, Model<IUser>>({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    token: String,
});

const User = mongoose.model<IUser>('User', userSchema);

export { IUser, User };