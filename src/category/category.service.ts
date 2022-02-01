import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import Category from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

import { threadId } from 'worker_threads';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>

  ) {

  }

  //create new 
  async create(createCategoryDto: CreateCategoryDto) {
    const newcategory = await this.categoryRepository.create(createCategoryDto)
    await this.categoryRepository.save(newcategory);

    return newcategory;
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOne(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
     await this.categoryRepository.update(id,updateCategoryDto);
 
     const upatedcategory  = await this.categoryRepository.findOne(id);

     if(upatedcategory)
     {
       return upatedcategory
     }
     


     throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }

  async remove(id: number) {
    const deleteCategory = await this.categoryRepository.delete(id)


    if(!deleteCategory)
    {
      throw new HttpException('category  not found', HttpStatus.NOT_FOUND);
    }
  }
}
