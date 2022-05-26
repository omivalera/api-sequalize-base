import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'sqdb',
    'postgres',
    'elsaye',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);