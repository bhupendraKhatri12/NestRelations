import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import Tag from './entities/tag.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { retry } from 'rxjs';

@Injectable()
export class TagsService {


  constructor(@InjectRepository(Tag) private tagrepo: Repository<Tag>) { }

  async create(createTagDto: CreateTagDto) {
    const newtag = this.tagrepo.create(createTagDto);
    newtag.createdAt = new Date;
    newtag.updatedAt = null;
    await this.tagrepo.save(newtag);
    return newtag;
  }

  async findAll() {
    return await this.tagrepo.find({ relations: ['product'] })
  }

  async findOne(id: number) {
    try {
      return await this.tagrepo.findOneOrFail(id,{ relations: ['product'] })
    }
    catch (err) {

      throw new err
    }
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const found = await this.tagrepo.findOneOrFail(id)
    found.updatedAt = new Date();

    return await this.tagrepo.save({ ...found, ...updateTagDto })

  }

  async remove(id: number) {

    const deletetag = await this.tagrepo.delete(id);


    if (!deletetag) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    }
    else {
      return deletetag;
    }

  }


}
