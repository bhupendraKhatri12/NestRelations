import { MiddlewareConsumer, Module,NestModule, RequestMethod } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import  Product from  "./entities/product.entity"
import {AuditMiddleware} from  "../Middleware/audit.middleware"


@Module({
  imports:[TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer 
      .apply(AuditMiddleware)
      .forRoutes({path:"product/*",method:RequestMethod.DELETE})
  }
}
