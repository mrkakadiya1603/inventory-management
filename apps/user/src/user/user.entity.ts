import { Table, Column, Model } from 'sequelize-typescript';

@Table()
export class User extends Model<User> {
    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
}