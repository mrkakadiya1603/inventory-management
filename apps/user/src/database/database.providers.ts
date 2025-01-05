import { Sequelize } from 'sequelize-typescript';
import { User } from './../user/user.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mssql',
                host: 'localhost',
                port: 1433,
                username: 'your-username',
                password: 'your-password',
                database: 'user_db',
            });
            sequelize.addModels([User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];