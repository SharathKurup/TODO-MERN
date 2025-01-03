import {User} from "../models/userModel.js";
import bcrypt from 'bcryptjs';

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

// const createUser = async (req, res) => {
//     try {
//         if (!req.body.username || !req.body.email || !req.body.password) {
//             return res.status(400).send({message: 'Username, Email and Password are required'});
//         }
//         const user = new User(req.body);
//         const result = await user.save();
//         res.status(201).send(result);
//     } catch (error) {
//         res.status(400).send({message: error.message});
//     }
// }

const createUser = async (req, res) => {
    try {
        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).send({ message: 'Username, Email and Password are required' });
        }

        // Hash the password before saving
        const hashedPassword = bcrypt.hashSync(req.body.password, 0);

        const user = new User({
            ...req.body,
            password: hashedPassword
        });

        const result = await user.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

export default {getUsers, createUser};