import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from '../mongodb/connect.ts';

dotenv.config();

const app = express()
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.get('/', (req: Request, res: Response ) => {
    res.json({message: 'Hello Petpos!'})
})

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL as string)

        app.listen(8080, () => console.log('Server Started on port http://localhost:8080'));
    } catch (error){
        console.log(error);
    }
}

startServer();