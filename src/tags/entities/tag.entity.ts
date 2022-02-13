import Category from "src/category/entities/category.entity";
import Product from "src/product/entities/product.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";

@Entity("Tag")
class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date

    @Column()
    userid: number


    @ManyToMany(type => Product, product => product.id)
    @JoinTable()
    product: Product[]


    //Tags relationsip
    @ManyToMany(type => Category, category => category.tags)
    category: Category[]

}


export default Tag;