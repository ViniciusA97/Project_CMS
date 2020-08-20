import { Router } from "express";
import { User } from './entities/User';

const route = Router();

route.get('/test', (request, response)=>{
    return response.status(200).json({"sucess":"true"}).send()
});

route.get('/testConnection', async (request, response)=>{
    const userTest = new User();  
    userTest.name= "teste";
    userTest.email = "email";
    userTest.password= "password";
    await userTest.save();
    return response.status(200).json({'id':userTest.id}).send();
});


export {route}