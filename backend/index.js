import express from 'express';
import {PORT, DB_URL,JWT_SECRET} from './config.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userRoute from './routes/userRoute.js';
import taskRoute from './routes/taskRoute.js';
import mongoose from "mongoose";
import cors from 'cors';
import {User} from './models/userModel.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);

app.get('/health', (req, res) => {
    res.status(200).send('ToDo App is running successfully');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send("Invalid credentials");
        }
        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

mongoose.connect(DB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }).catch(error => console.log(error));

