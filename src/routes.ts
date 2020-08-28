import { Router } from "express";
import { User } from './entities/User';
import { Cryptografic } from "./util/crypt";
import { Database } from './database';

const route = Router();


route.get('/test', (request, response)=>{
    return response.status(200).json({"sucess":"true"}).send()
});

route.get('/testConnection', async (request, response)=>{
    const userTest = new User();  
    const criptografy = new Cryptografic();
    let pass =  await criptografy.encrypt('teste');
    userTest.name= "teste";
    userTest.email = "email";
    userTest.password= pass;
    await userTest.save();
    return response.status(200).json({'id':userTest.id}).send();
});

route.post('/login', async (req, resp)=>{
    const db = Database.getInstance();
    var connection = db.getConnection();
    const crypt = new Cryptografic();
    const user = new User;
    const {email, password} = req.body;
    const userData = await connection.getRepository(User).findOne({email:email});
    if(!userData) return resp.status(404).send({'sucess':false,'friendly_message':'User not found'});
    if(!await crypt.compare(password,userData.password)) return resp.status(401).send({'sucess':false, 'friendly_message':'Authentication failed'})
    resp.send({'sucess':true, 'user':userData})

});


export {route}