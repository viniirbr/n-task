import express, { Request, Response } from 'express';

const router = express.Router();

router
    .get('/tasks', (req: Request, res: Response) => {
        res.json({tasks:[
            {title:"Shopping"},
            {title:"Study"}
        ]})
    })
    .post('/tasks', (req: Request, res: Response) => {
        res.status(201).send(req.body);
    })

export default router;


