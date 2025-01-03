import jwt from 'jsonwebtoken';
import {JWT_SECRET} from "../config.js";

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({message: "Authorization header is missing"});
    }

    const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"
    if (!token) {
        return res.status(401).json({message: "Token is missing"});
    }
    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({message: "Token has expired"});
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({message: "Token is invalid"});
        } else {
            return res.status(403).json({message: "Failed to authenticate token"});
        }
    }
}

export default authenticateToken;