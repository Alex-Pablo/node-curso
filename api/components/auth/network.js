const express = require('express');
const response = require('../../../network/response')
const Controler = require('./index')
const router = express.Router();
router.post('/login',(req, res)=>{
    Controler.login(req.body.username, req.body.password)
        .then(token => {
            console.log(token);
            response.success(req, res, token)
        })
        .catch(e => {
            response.error(req, res, 'INformacion invalida')
        })
} ),


module.exports =  router

