import  {Entity,Column,PrimaryGeneratedColumn,ManyToMany,OneToMany,ManyToOne,JoinTable} from "typeorm";


@Entity("Brand")
class Brand {
@PrimaryGeneratedColumn()
id:number;

@Column()
name:string

@Column()
country:string

}



export default Brand