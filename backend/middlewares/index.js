import jsonwebtoken from "jsonwebtoken";

const authJwt = async (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({ msg : "Cannot authenticate!" });
    }

    try {
        const verifyToken = jsonwebtoken.verify(token, config.get('jwtSecret'));
        req.userId = verifyToken.userId;
        
        next();

    } catch (error) {
        console.log(error)
        res.status(401).json({msg : "Token Invalid"});
    }
}

export default authJwt;