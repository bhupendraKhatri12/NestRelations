import Brand from "src/brand/entities/brand.entity";
import Category from "src/category/entities/category.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";
import Tag from "../../tags/entities/tag.entity"

@Entity("Product")
class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
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


    @Column()
    abv: string

    @Column()
    createdAt: Date


    @Column()
    updatedAt: Date


}
export default Product;