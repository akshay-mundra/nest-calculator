import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenvConfig();

export const typeOrmConfig: DataSourceOptions & TypeOrmModuleOptions = {
	type: 'postgres',
	host: process.env.DATABASE_HOST,
	port: Number(process.env.DATABSE_PORT),
	username: process.env.DATABSE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	entities: ['dist/**/entities/*.entity{.ts,.js}'],
	migrations: ['dist/**/migrations/*{.ts,.js}'],
	synchronize: false,
};

export const AppDataSource = new DataSource(typeOrmConfig);
