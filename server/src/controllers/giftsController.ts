import { NextFunction, Request, Response } from 'express';
import {connect} from '../db';

const create = async (req: Request, res: Response, next: NextFunction) => {
    const {title, quantity, deadline, nominal} = req.body;
    const query = `INSERT INTO gifts (title, quantity, deadline, nominal) VALUES ("${title}", "${quantity}", "${deadline}", "${nominal}")`;
    const conn = await connect();
    conn.query(query, (err: any, result: any, fields: any) => {
        !err ? res.json(result) : res.json(err);
        conn.end();
    }); 
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
        const query = 'SELECT * FROM gifts';
        const conn = await connect();
        conn.query(query, (err: any, rows: any, fields: any) => {
            !err ? res.json(rows) : res.json(err);
            conn.end();
        });
};

const getOne = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const query = `SELECT * FROM gifts WHERE id = ${id}`;
    const conn = await connect();
    conn.query(query, (err: any, result: any, fields: any) => {
        !err ? res.json(result) : res.json(err);
        conn.end();
    });
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const query = `DELETE FROM gifts WHERE id = ${id}`;
    const conn = await connect();
    conn.query(query, (err: any, result: any, fields: any) => {
        !err ? res.json(result) : res.json(err);
        conn.end();
    });
};

export default { create, getAll, getOne, destroy };