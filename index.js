const express = require('express');
const app = express();
require('./models/dbConfig');   // connexion à la BD
const postsRoutes = require('./routes/postsController');    // on configure le routage et les méthodes pour contrôler la BD (get, post, put, delete)
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useFindAndModify', false);

// on appelle les middleware
app.use(bodyParser.json()); // méthode qui permet d'interpréter le json des 'request' et 'response'
app.use(cors());            // app.use(origin: 'http://monsite.io') pour restreindre l'accès de l'API au site spécifié
                            // app.use(origin : 'http://localhost:3000') pour créer un back en limitant l'accès aux seuls appels venant d'un serveur ouvert sur le port localhost:3000
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));