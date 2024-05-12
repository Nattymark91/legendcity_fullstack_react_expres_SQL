import { NextFunction, Request, Response } from 'express';
import {connect} from '../db';

const create = async (req: Request, res: Response, next: NextFunction) => {
    const {name, quantity, days, description, carts, giftId} = req.body;
    const query = `INSERT INTO mailing (name, quantity, days, description, carts, giftId) 
    VALUES ("${name}", "${quantity}", "${days}", "${description}", "${carts}", "${giftId}")`;
    const conn = await connect();
    conn.query(query, (err: any, result: any, fields: any) => {
        !err ? res.json(result) : res.json(err);
        conn.end();
    }); 
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
        const {page, limit, order, orderBy, keyword} = req.query;
        const nPage: number = Number(page) || 1
        const nLimit: number = Number(limit) || 10
        const offset = nPage * nLimit - nLimit

        const orderQuery = (order && orderBy) ? ` ORDER BY ${orderBy} ${order} ` : ''
        const keyQuery = (keyword) ? ` WHERE name LIKE '%${keyword}%' ` : ''
        const query = `SELECT *, COUNT(*) OVER() AS count FROM mailing ${keyQuery} ${orderQuery} LIMIT ${nLimit} OFFSET ${offset}`;

        const conn = await connect();
        conn.query(query, (err: any, rows: any, fields: any) => {
            !err ? res.json(rows) : res.json(err);
            conn.end();
        });
};

const getOne = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const query = `SELECT * FROM mailing WHERE id = ${id}`;
    const conn = await connect();
    conn.query(query, (err: any, result: any, fields: any) => {
        !err ? res.json(result) : res.json(err);
        conn.end();
    });
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const {name, quantity, days, description, carts, giftId} = req.body;
    const query = `UPDATE mailing 
    SET name='${name}', quantity='${quantity}', days='${days}', description='${description}', carts='${carts}', giftId='${giftId}'
    WHERE id = ${id}`;
    const conn = await connect();
    conn.query(query, (err: any, result: any, fields: any) => {
        !err ? res.json(result) : res.json(err);
        conn.end();
    }); 
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const query = `DELETE FROM mailing WHERE id = ${id}`;
    const conn = await connect();
    conn.query(query, (err: any, result: any, fields: any) => {
        !err ? res.json(result) : res.json(err);
        conn.end();
    });
};

export default { create, getAll, getOne, update, destroy };