import Product from "src/product/entities/product.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";



@Entity("Image")
class Image {
    @PrimaryGeneratedColumn()
    id: number
   
    @Column({nullable:true})
    created: Date

    @Column({nullable:true})
    updated: Date


    @Column({nullable:true})
    url: string

    @Column({nullable:true})
    publicid: string


    @OneToMany(()=>Product,product => product.id)
     productid:Product[]



}


export default Image