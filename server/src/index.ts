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















// const app = express();
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//     res.send('Server start');
// })

// app.get('/:id', (req: Request, res: Response) => {
//     res.send(req.params.id);
// })

// app.post('/', (req: Request, res: Response) => {
//     res.send({
//         data:req.body
//     });
// })

// app.listen(5000, () => {
//     console.log('The server starte on port 5000')
// })
