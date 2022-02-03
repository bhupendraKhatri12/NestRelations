import Product from "src/product/entities/product.entity";
import Tag from "src/tags/entities/tag.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";

@Entity("Category")
class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true})
    name:string  

    @OneToMany(() => Product, product => product.id)
    productid: Product[]

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[]

}

export default Category