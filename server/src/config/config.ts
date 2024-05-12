import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const MYSQL_HOST = process.env.MYSQL_HOST || '127.0.0.1';
const MYSQL_PORT = process.env.MYSQL_PORT || '3306';
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD|| '';
const DB_NAME = process.env.DB_NAME || 'legendcity';

const MYSQL = {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    db: DB_NAME
}

const config = {
    port: PORT,
    mysql: MYSQL
};

export default config;
