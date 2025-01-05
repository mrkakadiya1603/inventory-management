import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Category } from './category.entity';
import { Product } from './product.entity';

@Table
export class SubCategory extends Model<SubCategory> {
    @Column
    name: string;

    @ForeignKey(() => Category)
    @Column
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;

    @HasMany(() => Product)
    products: Product[];
}