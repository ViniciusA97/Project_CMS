import { Router } from "express";

const route = Router();

route.get('/test', (request, response)=>{
    return response.status(200).json({"sucess":"true"}).send()
});

export {route}