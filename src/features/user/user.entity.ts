import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column({name: 'firstname', type: 'varchar', nullable: false}) firstName: string;
  @Column({name: 'lastname', type: 'varchar', nullable: false}) lastName: string;
  @Column({type: 'varchar', nullable: false}) email: string;
}
