import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Image from "./entities/image.entity"

@Injectable()
export class ImageService {

  constructor(@InjectRepository(Image) private ImageRepository: Repository<Image>) {

  }

  async create(createImageDto: CreateImageDto) {
    const newImage = await this.ImageRepository.create(createImageDto);
    newImage.created = new Date;
    newImage.updated = null;
    await this.ImageRepository.save(newImage);

    return newImage;
    return this.ImageRepository.find();
  }

  findAll() {
    return this.ImageRepository.find({ relations: ['product'] });
  }

  findOne(id: number) {
    return this.ImageRepository.findOneOrFail(id, { relations: ['product'] });
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    const updatedone = await this.ImageRepository.findOne(id);
    await this.ImageRepository.save({...updatedone,...updateImageDto});

    if (updateImageDto) {
      return updateImageDto;
    }
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);


  }

  remove(id: number) {
    return this.ImageRepository.delete(id);
  }
}
