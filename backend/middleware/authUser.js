//convert user token to user id

import jwt from 'jsonwebtoken'

const authU = async (req, res, next) => {

    const { token } = req.headers;

    if (!token) {
        //no token avail.
        return res.json({ success: false, message: "Authorization failure." })
    }

    try {
        //decode token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        //get userid
        req.body.userId = token_decode.id;
        next()
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })


    }
}

export default authU