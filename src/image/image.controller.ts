import { Controller, Get, Post, Body, Patch, Param, Delete, StreamableFile, Response } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) { }

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }


  @Get("file")
  returnimage(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), './src/file.png'));

    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="file.png"',
    });

    return new StreamableFile(file);

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }
  
  @Get(':id/product')
  findProduct(@Param('id') id: string) {
    return this.imageService.getProduct(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
