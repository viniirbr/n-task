import express, { Request, Response } from 'express'
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
    res.send("Olá")
}) 

app.listen(PORT, () => {
    console.log(`Servidor conectado em localhost:${PORT}`)
})

