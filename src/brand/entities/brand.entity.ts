import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, JoinTable } from "typeorm";


@Entity("Brand")
class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    country: string
    //there is a many to one relation but it is only derfined in Product Entity 
}



export default Brand