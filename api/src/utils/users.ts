import {Response, Request} from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user.model";

export const verifyVerificationToken = async(req:Request, res:Response)=>{
    try {
        const token = req.query.token as string;

        if(!token) return res.status(401).json({status: 401, message: "Token not found"});

        const verifiedToken = jwt.verify(token, process.env.TOKEN_GENERATOR as string);
        
        if(!verifiedToken) return res.status(401).json({status: 401, message: "Token not found"});

        const userId = (verifiedToken as JwtPayload).userId;

        const user = await User.findOne({_id: userId});

        if(!user) return res.status(401).json({status: 401, message: "Token not found"});

        user.isVerified = true;

        await user.save({validateBeforeSave: false});

        return res.status(200).json({status: 200, message: "Email verified successfully"});
    } catch (error) {
        console.error(error);
        return res.status(400).json({status: 400, message: "Un-expected error"});
    }
}