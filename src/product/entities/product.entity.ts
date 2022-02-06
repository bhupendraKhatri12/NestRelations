import Brand from "src/brand/entities/brand.entity";
import Category from "src/category/entities/category.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";
import Tag from "../../tags/entities/tag.entity"
import  Image from "../../image/entities/image.entity"
import { Exclude } from 'class-transformer';


@Entity("Product")
class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Exclude()
    skuNumber: number

    @ManyToOne(() => Brand, brand => brand.id)
    Brandid: Brand

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[]


    @Column()
    countryOfOrigin: string;

    @Column()
    stateOfOrigin: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    userid: number

    @ManyToOne(() => Category, category => category.id)
    categoryid: Category


    //There is relationship with  a image Entity


    @Column()
    abv: string

    @Column({nullable:true})
    createdAt: string


    @Column({nullable:true})
    updatedAt: string

    
    constructor(partial: Partial<Product>) {
        Object.assign(this, partial);
      }

}
export default Product;