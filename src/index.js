import express from 'express';
import routes from './routes.js';
import {mainMiddleware} from "./middleware/main.js";
import session from 'express-session';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(mainMiddleware);
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use('/api/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
