import Product from "src/product/entities/product.entity";
import Tag from "src/tags/entities/tag.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";

@Entity("Category")
class Category {
    @PrimaryGeneratedColumn()
    id: number


    @OneToMany(() => Product, product => product.id)
    productid: Product[];

    
    @Column()
    parentCategoryId: number;


    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[]

}

export default Category