import { createPool } from "mysql2";
import config from './config/config';

export async function connect(){
    const connection = await createPool({
        host: config.mysql.host,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.db,
        connectionLimit: 3,
    }) 

    return connection;
}