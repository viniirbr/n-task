import express, { Request, Response } from 'express'
import app from './routes';


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Servidor conectado em localhost:${PORT}`)
})

