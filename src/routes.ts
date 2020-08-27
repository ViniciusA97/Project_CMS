import { Router } from "express";
import { User } from './entities/User';
import { Cryptografic } from "./util/crypt";


const route = Router();
const criptografy = new Cryptografic();

route.get('/test', (request, response)=>{
    return response.status(200).json({"sucess":"true"}).send()
});

route.get('/testConnection', async (request, response)=>{
    const userTest = new User();  
    let pass =  await criptografy.encrypt('teste');
    userTest.name= "teste";
    userTest.email = "email";
    userTest.password= pass;
    await userTest.save();
    return response.status(200).json({'id':userTest.id}).send();
});


export {route}