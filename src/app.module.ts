import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { TagsModule } from './tags/tags.module';
import { BrandModule } from './brand/brand.module';
import { ImageModule } from './image/image.module';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'qwerty',
    database: 'todo',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize:true
  }), ProductModule, TagsModule, BrandModule, ImageModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
