const express = require('express');
const config = require('../config')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
 
const app = express();
app.use(express.json());

//ROUER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.listen( config.api.port, ()=>{console.log(`eschuando en el puerto ${config.api.port}`)}) 