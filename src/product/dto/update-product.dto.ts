// import { PartialType } from '@nestjs/mapped-types';
// import {CreateProductDto} from './create-product.dto';

import Brand from "src/brand/entities/brand.entity";
import Tag from "src/tags/entities/tag.entity";

 export class UpdateProductDto {

     id:number

    skuNumber:number
    
    countryOfOrigin: string;

    stateOfOrigin: string
    userid: number

    name: string

    description: string

    abv: string

    counter:number
    createdAt: string

    updatedAt: string
    

    brandid:number
    
    tagsid:number




}


