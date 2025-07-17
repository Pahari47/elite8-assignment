import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import studentRoutes from './routes/student.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', studentRoutes);

export default app;
