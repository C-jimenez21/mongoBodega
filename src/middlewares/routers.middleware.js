import 'reflect-metadata'
import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { Router } from "express";
import {validate} from 'class-validator'
import { objectDTO } from '../helpers/ObjectDTO.js';

const appMiddlewareCampusVerify = Router();
const appDTOData = Router();

appMiddlewareCampusVerify.use('/', async(req, res, next) => {
    let classs = objectDTO[req.path.split('/')[1]]
    //console.log({"classs": classs});
    if(!req.rateLimit) return;
    //console.log(req.rateLimit);
    let {payload} = req.data;
    //console.log({"payload": payload});

    const {iat, exp, ...newPayload} = payload; 
    payload = newPayload
    //console.log({"new playload": payload});

    let clone = JSON.stringify(classToPlain(plainToClass(classs, {}, {ignoreDecorators:true})));
    //console.log(clone);
    //console.log(JSON.stringify(payload));
    let verify = clone === JSON.stringify(payload);
    (!verify) ? res.status(406).send({status:406, message: "No Autorizado"}): next()
});

appDTOData.use( async(req,res,next) => {
    try {
        let classs = objectDTO[req.path.split('/')[1]] 
        //console.log({"classs": classs});
        let data = plainToClass(classs, req.body);
        //console.log({"data":data});
        await validate(data);
        //console.log({"validate data": await validate(data)});
        //console.log({"data despues del validate": data});
        req.body = JSON.parse(JSON.stringify(data));
        //console.log({"data desp del validate": data});


        //console.log({"req.body despues del validate": req.body});
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    appMiddlewareCampusVerify,
    appDTOData
};
