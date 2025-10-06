import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = 4000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto 4000');
});
