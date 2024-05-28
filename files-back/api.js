import express from 'express';
import cors from 'cors';
import './config/database.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 8000;

const api = express();
api.use(cors({}));
/**
 * TODO: registrar todas las rutas
 */

api.use('/users', userRouter);

api.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
