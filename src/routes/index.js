//rota

'use strict'

const express = require('express')

const router = new express.Router();

//primeiro ponto de acesso para a nossa aplicação
//endpoint
router.get('/', (req, res, next) => {
    res.status(200).send({
        "nome" : "Giovanni Kenji Mendes",
        "idade" : 20
    })
});

module.exports = router; //expor a rota