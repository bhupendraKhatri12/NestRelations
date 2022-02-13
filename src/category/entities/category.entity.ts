import Product from "src/product/entities/product.entity";
import Tag from "src/tags/entities/tag.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";

@Entity("Category")
class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    name: string

    @OneToMany(() => Product, product => product.category)
    product: Product[]

    //CAtegory Relationship
    @ManyToMany(type => Tag,tag=>tag.id)
    @JoinTable()
    tags: Tag[]


}

export default Category