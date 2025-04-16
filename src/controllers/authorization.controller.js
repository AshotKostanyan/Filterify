import {pool} from "../pool.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {errorMessages} from "../config/error-messages.js";
import * as validator from "../validators/index.js";

export class AuthorizationController {
    static async login(req, res) {
        try {
            const email = validator.validateEmail(req.body.email);
            const password = validator.validatePassword(req.body.password);

            const [[user]] = await pool.query(`
                select *
                from users
                where email = ?
            `, [email])

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );
            res.cookie('token', token, { httpOnly: true });

            return res.status(200).json({ message: 'Sign in successful' });
        } catch (e) {
            if (errorMessages.has(e.message)) {
                return res.status(400).json({ message: e.message });
            }
            console.error(e);
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }


    static async register(req, res) {
        try {
            const email = validator.validateEmail(req.body.email);
            const password = validator.validatePassword(req.body.password);
            const name = validator.validateEmail(req.body.name);


            const [[existingUser]] = await pool.query(`
                select * 
                from users 
                where email = ?
            `, [email])

            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await pool.query(`
                insert into users (name, email, password)
                values (?, ?, ?)
            `, [name, email, hashedPassword])

            return res.status(201).json({ message: 'User signed up successfully' });
        } catch (e) {
            if (errorMessages.has(e.message)){
                return res.status(400).json({ message: errorMessages.get(e.message) });
            }
            console.log(e)
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
}