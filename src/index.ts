import app from './app';

const PORT = process.env.PORT || 4000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto 4000');
});
