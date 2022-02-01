import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import Brand from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class BrandService {
 constructor(
  @InjectRepository(Brand) private BrandRepository: Repository<Brand>,

 ){}


  async create(createBrandDto: CreateBrandDto) {
    const newbrand = await  this.BrandRepository.create(createBrandDto)
    await this.BrandRepository.save(newbrand);


    return newbrand;
  }

  findAll() {
    return this.BrandRepository.find();
  }

  findOne(id: number) {
    return this.BrandRepository.findOne(id);
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {

    await this.BrandRepository.update(id,updateBrandDto);
    const  updatedBrand = await this.BrandRepository.findOne(id)
  
    if(updatedBrand)
    {
      return updatedBrand
    }
    

    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number) {

 const BrandTodo = await this.BrandRepository.delete(id);
    if (!BrandTodo.affected) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }  }
}
