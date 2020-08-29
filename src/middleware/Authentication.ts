import jsonwebtoken from 'jsonwebtoken';

module.exports= (req, resp, next) => {
    const jwt  = jsonwebtoken;
    const authConfig = require('./../json/auth.json');
    const authHeader = req.headers.authorization;
    if(!authHeader) 
        return resp.status(401).send({error:"No token provider"});

    const parts = authHeader.split(' ');
    
    if(!parts.length === 2)
        return resp.status(401).send({error: "Token error"}); 

    const [ scheme, token ] = parts;
    if(!/^Bearer$/i.test(scheme)){
        return resp.status(401).send({error: "Token malFormated" })
    }
    jwt.verify(token, authConfig.secret, (error, decoded)=>{
        if(error) return resp.status(401).send({error:"Token invalid"});
        req.userId = decoded.id;
        return next();
    })
}