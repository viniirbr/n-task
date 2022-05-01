import express, { Request, Response } from 'express';
import tasks from './tasks';

const app = express();

app.route('/')
    .get((req: Request, res: Response) => {
        res.json({mesage:"Aplicação NTasks"})
    });

app.use(
    express.json(),
    tasks
)
app.set('json spaces', 2);

export default app;