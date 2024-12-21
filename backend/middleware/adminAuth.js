import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: "Auth Failure" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Auth Failure" });
        }

        next();
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export default adminAuth;
