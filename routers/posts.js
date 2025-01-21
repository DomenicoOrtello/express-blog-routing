const express = require('express');
const router = express.Router();
const postsDataElm = require("../postsdata")

// index
router.get('/', function (req, res) {
    res.json('Lista delle pizze');
});
// show
router.get('/:id', function (req, res) {
    res.json('Dettagli della pizza ' + req.params.id);
});
// store
router.post('/', function (req, res) {
    res.json('Creazione nuova pizza');
});
// update
router.put('/:id', function (req, res) {
    res.json('Modifica integrale della pizza ' + req.params.id);
});
// modify
router.patch('/:id', function (req, res) {
    res.json('Modifica parziale della pizza ' + req.params.id);
});
// destroy
router.delete('/:id', function (req, res) {
    res.json('Eliminazione della pizza ' + req.params.id);
});