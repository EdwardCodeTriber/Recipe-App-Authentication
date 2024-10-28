import jwt from "jsonwebtoken"

function generateToken(id){
    return jwt.sign({id: id}, process.env.JWR_SECRET,{
        expiresIn:"30m"
    })
}

export default generateToken;