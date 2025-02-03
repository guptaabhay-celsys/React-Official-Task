import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserService } from "../services/userService";

dotenv.config();

const JWT_SECRET = '12345';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
        this.userSignup = this.userSignup.bind(this);
        this.userLogin = this.userLogin.bind(this);
    }

    async userSignup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ message: 'All fields are required.' });
            }

            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ message: 'Invalid email format.' });
            }

            const emailExists = await this.userService.findUser({ email });
            if (emailExists) {
                return res.status(400).json({ message: 'Email is already registered.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await this.userService.createUser({ name, email, password: hashedPassword });
            res.status(201).json({
                message: 'User registered successfully.',
                user: { id: user.id, name: user.name, email: user.email },
            });
        } catch (error) {
            console.error('Error during user signup:', error);
            res.status(500).json({ message: 'An error occurred while registering the user.' });
        }
    }

    async userLogin(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required.' });
            }

            const userExists = await this.userService.findUser({ email });
            if (!userExists) {
                return res.status(401).json({ message: 'Invalid email or password.' });
            }

            const user = userExists;

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password.' });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email, name: user.name },
                JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.status(200).json({
                message: 'Login successful.',
                token,
                user: { id: user.id, name: user.name, email: user.email },
            });
        } catch (error) {
            console.error('Error during user login:', error);
            res.status(500).json({ message: 'An error occurred while logging in.' });
        }
    }
}
