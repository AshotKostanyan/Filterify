import jwt from "jsonwebtoken";

export default function jwtMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid or expired token" });
            }

            req.user = user;
            next();
        });
    } else {
        return res.status(401).json({ message: "Authorization token missing" });
    }
}