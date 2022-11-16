import jsonwebtoken from "jsonwebtoken";
import { setResponse, setRequestError, setServerError} from "../controllers/utils.js";
import config from "config";

const authJwt = async (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token){
        return setRequestError({ msg : "Cannot authenticate!" }, res);
    }

    try {
        const verifyToken = jsonwebtoken.verify(token, config.get('jwtSecret'));
        req.userId = verifyToken.userId;
        
        next();

    } catch (error) {
        console.log(error)
        return setRequestError({ msg : "Token Invalid" }, res);
    }
}

export default authJwt;