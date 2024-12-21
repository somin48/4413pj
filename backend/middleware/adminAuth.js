import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {

    try {
        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: "Auth Failure" })
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PW) {
            return res.json({ success: false, message: "Auth Failure" })
        }
        next()
    } catch (error) {
        return res.json({ success: false, message:error.message })
    }
}

export default adminAuth