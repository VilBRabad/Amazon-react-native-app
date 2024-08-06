import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export type IUser = {
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    verificationToken?: string;
    accessToken?: string;
    isPasswordCorrect(password: string): Promise<boolean>;
    generateAccessToken(): Promise<string>;
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
    },
    accessToken: {
        type: String,
    }
}, { timestamps: true });


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    return next();
});


userSchema.methods.isPasswordCorrect = async function(password: string){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = async function(){
    try {
        return jwt.sign(
            {
                userId: this._id
            },
            process.env.ACCESS_TOKEN_SECRET as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY 
            }
        )
    } catch (error) {
        console.error(error);
        return new Error("Error while creating error");
    }
}

export const User = mongoose.model("User", userSchema);