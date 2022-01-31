import Product from "src/product/entities/product.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";



@Entity("Image")
class Image {
    @PrimaryGeneratedColumn()
    id: number
   
    @Column()
    created: Date

    @Column()
    updated: Date


    @Column()
    url: string

    @Column()
    publicid: string


    @OneToMany(()=>Product,product => product.id)
     productid:Product[]



}


export default Image