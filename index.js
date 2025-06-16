require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Conectar
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao Mongodb...'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));