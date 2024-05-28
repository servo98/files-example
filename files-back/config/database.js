import mongoose from 'mongoose';

const connection = mongoose.connection;

connection.on('open', () => {
  console.log('🟢 Conexión a base de datos');
});

connection.on('disconnected', () => {
  console.error('🔴 Base de datos desconectada');
});

mongoose.connect(process.env.MONGO_URI);
