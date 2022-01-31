import Product from "src/product/entities/product.entity";
import  {Entity,Column,PrimaryGeneratedColumn,ManyToMany,OneToMany,ManyToOne,JoinTable} from "typeorm";

@Entity("Tag")
class Tag {
@PrimaryGeneratedColumn()
id:number;


@Column()
name:string;
 

@Column()
createdAt:Date

@Column()
updatedAt:string


@Column()
userid:number


}


export default Tag;