import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import exercisesRoutes from './routes/exercises.js';

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.get('/',(req,res)=>{res.send('API')})
app.use('/exercises',exercisesRoutes)

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL).then(()=>app.listen(PORT,()=>{console.log(`Server On ${PORT}`)})).catch((error)=>{console.log(error.message)});
