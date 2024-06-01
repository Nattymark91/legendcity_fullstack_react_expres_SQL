import express from 'express';
import { Request, Response } from 'express';
import config from './config/config';
import router from './routes/router';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Server working');
})

app.use('/api', router);

app.listen(config.port, () => {
    console.log(`The server starte on port ${config.port}`)
})
