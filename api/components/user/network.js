const express = require('express');
const response = require('../../../network/response')
const Controler = require('./index')
const router = express.Router();

router.get('/', (req, res)=>{
    Controler.list()
        .then((e)=>{    response.success(req, res,  e)})
        .catch((error) =>{response.error(  req,res, error.message, 500 )})
})
router.get('/:id', (req, res)=>{
    Controler.get(req.params.id)
        .then((e)=>{response.success(req, res,  e)})
        .catch((error) =>{response.error(  req,res, error.message, 500 )})
})
router.post('/add', (req, res)=>{
    Controler.add(req.body)
        .then((e)=>{response.success(req, res,  e)})
        .catch((error) =>{response.error(  req,res, error.message, 500 )})
})
router.put('/add', (req, res)=>{
    Controler.add(req.body)
        .then((e)=>{response.success(req, res,  e)})
        .catch((error) =>{response.error(  req,res, error.message, 500 )})
})
router.delete('/:id', (req, res)=>{
    Controler.remove(req.params.id)
        .then((e)=>{response.success(req, res,  e)})
        .catch((error) =>{response.error(  req,res, error.message, 500 )})
})

module.exports = router


 