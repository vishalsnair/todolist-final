import { Users } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // userid: number;

  @Column()
  discription: string;

  @ManyToOne (type => Users, (user) => user.notes)
  @JoinColumn({ name: "userId" })
  user: Users;
}
