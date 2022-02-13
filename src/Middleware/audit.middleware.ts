import {  NestMiddleware} from "@nestjs/common";
import {Response} from "express";
import {Request} from "express-serve-static-core"

export  class AuditMiddleware implements  NestMiddleware{
    use(req: Request, res: Response, next: Function) {
         console.log('Logging Delete resquest IP',req.ip);
         console.log('Logging Delete resquest PAth ',req.path);
         console.log('Logging Delete resquest herader',req.headers);
         next();

    }

} 