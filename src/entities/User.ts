import {uuid} from 'uuidv4';
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, Unique} from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column()
    public name:string;
    
    @Column()
    public email:string;
    
    @Column()
    public password:string;

    
}

export default User;