import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { getManager } from "typeorm"
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Product from "./entities/product.entity"
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private productrepo: Repository<Product>) { }

  async create(createProductDto: CreateProductDto) {
    const newproduct = await this.productrepo.create(createProductDto)
    await this.productrepo.save(newproduct);
    return newproduct;
  }


  findAll() {
    return this.productrepo.find();
  }

  findOne(id: number) {
    return this.productrepo.findOne(+id);
  }



  //update the record
  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productrepo.update(id, updateProductDto);
    const updatedProduct = await this.productrepo.findOne(id)
    if (updatedProduct) {
      return updatedProduct;
    }

    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);


  }

  async remove(id: number) {
    const deleteProduct = await this.productrepo.delete(id)

    if (!deleteProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    }
    else {


    }

  }
}
