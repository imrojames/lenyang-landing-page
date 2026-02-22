import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import specs from './config/swagger';
import connectDB from './config/db';
import personalInfoRouter from './routes/personalinfo.routes';

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/personalinfo', personalInfoRouter);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();