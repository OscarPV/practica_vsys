const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./routes/api');

const app = express();

// Configuración de la Base de Datos
const db = require('./config/keys').mongoURI;

// Conectar a Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Conectado.'))
    .catch(err => console.log(err));

// Usar rutas
app.use('/api', api);

// Producción
if (process.env.NODE_ENV === 'production') {
    // Folder estático
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

// Bodyparser Middleware
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Aplicación corriendo en puerto: ${port}`);
});