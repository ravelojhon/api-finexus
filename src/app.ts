import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { prisma } from './prisma/client';
import productRoutes from './routes/product.routes';
import { errorHandler } from './middlewares/errorHandler';
import { specs, swaggerUi } from './swagger';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'API OK' });
});

app.get('/api/products/test', async (req, res) => {
  try {
    const count = await prisma.product.count();
    res.json({ count });
  } catch (error) {
    console.error('Error counting products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Swagger documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'FinExus API Documentation',
}));

// Product routes
app.use('/api/products', productRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;
