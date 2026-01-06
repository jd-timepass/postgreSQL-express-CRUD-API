import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandling from './middleware/errorHandler.js';
import createUserTable from './data/createUserTable.js';

dotenv.config();


const app = express();

const port = process.env.PORT || 3000

// middlewares
app.use(express.json());
app.use(cors());
app.use(errorHandling);

// create user table before server starting
createUserTable()

// routes 
app.use("/api", userRoutes);

// server running
app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
})