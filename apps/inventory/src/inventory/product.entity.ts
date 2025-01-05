import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { SubCategory } from './subcategory.entity';

@Table
export class Product extends Model<Product> {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    price: number;

    @Column
    stock: number;

    @ForeignKey(() => SubCategory)
    @Column
    subCategoryId: number;

    @BelongsTo(() => SubCategory)
    subCategory: SubCategory;
}