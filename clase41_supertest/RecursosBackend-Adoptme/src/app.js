import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

mongoose.connect(`mongodb://admin:admin@localhost:27017`, { dbName: 'clase51400'})
    .then(() => {
        console.log('DB connected!');
        app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
    })
    .catch(e => {
        console.error(e);
    })
