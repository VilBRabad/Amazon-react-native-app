import { Request, Response } from "express";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const sendVerificationMail = async (email: string, verificationToken: string) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GMAIL_SERVICE_PASS
        }
    })

    const mailOptions = {
        from: "amazon.vil.com",
        to: email,
        subject: "Email verification",
        // text: `Please verify email address by following link: http://localhost:8000/verify-email?token=${verificationToken}`
        html: `<!DOCTYPE html>
                <html>
                <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        width: 80%;
                        margin: auto;
                        background: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    p {
                        font-size: 16px;
                        color: #666;
                    }
                    a {
                        color: #FFFFFF;
                        text-decoration: none;
                        background-color: #FF8225;
                        padding: 8px 15px;
                        text-decoration: none;
                        border-radius: 3px;
                        font-weight: 600;
                    }
                </style>
                </head>
                <body>
                <div class="container">
                    <p>Click the link below to verify your email:</p>
                    <a href="http://localhost:8000/verify-email?token=${verificationToken}">Verify Email</a>
                    <p>Thank you!</p>
                </div>
                </body>
                </html>
            `
    };

    try {
        const res = await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const RegisterUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.status(400).json({ status: 400, message: "All fields required!" });

        const existUser = await User.findOne({ email });
        if (existUser) return res.status(401).json({ status: 401, message: "User with email id already exists!" });

        const user = await User.create({
            name, email, password
        })

        if (!user) return res.status(402).json({ status: 402, message: "Failed to register" });

        const verificationToken = await jwt.sign(
            { userId: user._id },
            process.env.TOKEN_GENERATOR as string,
            { expiresIn: '1d' }
        )

        const isSendMail = sendVerificationMail(email, verificationToken);
        if (!isSendMail) return res.status(405).json({ status: 405, message: "failed to send verification mail" });

        // user.verificationToken = verificationToken;

        // user.save({validateBeforeSave: false});

        return res.status(200).json({ status: 200, message: "user created successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "Unexpected error" });
    }
}

const LoginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email.trim() || !password.trim()) return res.status(401).json({ status: 401, message: "All fields required!" });

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ status: 404, message: "User not found!" });

        const isPasswordCorrect = await user.isPasswordCorrect(password);

        if (!isPasswordCorrect) return res.status(402).json({ status: 402, message: "Password is not correct!" });

        const token = await user.generateAccessToken();

        if (!token) return res.status(405).json({ status: 405, message: "Token not generated" });

        user.accessToken = token;
        user.save({ validateBeforeSave: false });

        const loggedUser = await User.findOne({ _id: user._id }).select("-password -accessToken")

        res.setHeader('authorization', `Bearer ${token}`);
        return res.status(201).json({ status: 201, data: loggedUser, message: "User logged-in successfully" });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ status: 400, message: "Un-expected error" });
    }
}



export { RegisterUser, LoginUser };
