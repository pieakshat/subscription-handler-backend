import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

// someone is making a request to get user details -> authorize middle -> verify -> if valid -> next -> get user details 

// it's trying to find the user based off of the token of the user that is trying to make the request
// it looks if it is there, decodes it, verifies that it is the user and then patches it to request
const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.userId);

        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        req.user = user;

        next(); // movves it over to the next function 
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.messsage });
        next(error);
    }
}

export default authorize; 