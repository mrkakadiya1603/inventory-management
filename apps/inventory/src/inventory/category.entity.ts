import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { SubCategory } from './subcategory.entity';

@Table
export class Category extends Model<Category> {
    @Column
    name: string;

    @HasMany(() => SubCategory)
    subCategories: SubCategory[];
}