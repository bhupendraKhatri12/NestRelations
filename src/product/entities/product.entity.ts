import Brand from "src/brand/entities/brand.entity";
import Category from "src/category/entities/category.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable, Generated, JoinColumn, TableForeignKey } from "typeorm";
import Tag from "../../tags/entities/tag.entity"
import Image from "../../image/entities/image.entity"
import { Exclude } from 'class-transformer';


@Entity("Product")
class Product {

  @PrimaryGeneratedColumn()
  id: number


  @Column()
  skuNumber: number


  @Column()
  counter: number

  //Brand attribute

  @ManyToOne(type => Brand, brand => brand.id)
  brand: Brand

  //Tag attribute


  @ManyToMany(type => Tag, tags => tags.id)
  @JoinTable()
  tags: Tag[]

  //User attribute 
  @Column({ nullable: true })
  user: string;

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
  category: Category


  //There is relationship with  a image Entity
  @Column()
  abv: string

  @Column({ nullable: true })
  createdAt: Date


  @Column({ nullable: true })
  updatedAt: Date

  //Image Entity
  @OneToMany(type => Image, image => image.product)
  image: Image[]



}
export default Product;