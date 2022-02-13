import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { getManager } from "typeorm"
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Product from "./entities/product.entity"
import { ClassSerializerInterceptor, HttpException, HttpStatus, Injectable, UseInterceptors } from '@nestjs/common';
import { count } from 'console';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private productrepo: Repository<Product>) {
  }

  async create(createProductDto: CreateProductDto) {
    const newproduct = await this.productrepo.create(createProductDto)
    newproduct.createdAt = new Date();
    newproduct.updatedAt = new Date();

    await this.productrepo.save(newproduct);
    return newproduct;
  }

 

  //gret Brand
  async getBrand(id: number) {
    // this.productrepo.createQueryBuilder("Product")
    //     .leftJoinAndSelect("Product","brand")
    //     .getMany()
    try {
      const Brand = await this.productrepo.findOneOrFail(id, { relations: ['brand','tags'] });
      return Brand.brand;
    }
    catch (err) {
      throw new err;
    }

  }

//category
  async getCategory(id: number) {
    // this.productrepo.createQueryBuilder("Product")
    //     .leftJoinAndSelect("Product","brand")
    //     .getMany()
    try {

      const category = await this.productrepo.findOneOrFail(id, { relations: ['brand','tags'] });
      return category.tags;
    }
    catch (err) {
      throw new err;
    }

  }


  //Get Image
  async getImage(id: number) {
    // this.productrepo.createQueryBuilder("Product")
    //     .leftJoinAndSelect("Product","brand")
    //     .getMany()
    try {

      const image= await this.productrepo.findOneOrFail(id, { relations: ['brand','tags','image'] });
      return image.image;
    }
    catch (err) {
      throw new err;
    }

  }




  async findAll() {
    const update = await this.productrepo.find({ relations: ['brand','tags','image','category'] });
    for (let index = 0; index < update.length; index++) {
      // if(update[index].counter >0)
      // {
      //   continue;
      // }


      //  if(update[index].Brand ==null)
      //  {
      //   update[index].Brand =="Not registered"
      //  }


      if (update[index].user == null) {
        update[index].user = "User unknown"
      }



    }
    const newupdate = update;
    await this.productrepo.save(newupdate);

    return update;
  }

  async findOne(id: number) {
    const response = await this.productrepo.findOne(id,{relations:['tags','brand']});
    if (!response) {
      throw new HttpException('Product not found', 404);

    }
    return this.productrepo.findOne(id, {relations:['tags','brand']})

  }



  //update the record
  async update(id: number, updateProductDto: UpdateProductDto) {
    const found = await this.productrepo.findOneOrFail(id);

    found.counter++

    // await this.productrepo.save(updateProductDto);

    return await this.productrepo.save({ ...found, ...updateProductDto });

  }

  async remove(id: number) {
    const deleteProduct = await this.productrepo.delete(id)

    if (!deleteProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    }
    else {

     return deleteProduct;
    }

  }
}
