//expor o endpoint. vai chamar a repository
const { response } = require('express');
const mongoose = require('mongoose');
const repository = require('../repositories/product-repository');

//trazer as informações do GET para nós
exports.get = async(req, res, next) => {
    const data = await repository.getProduct();
    res.status(200).send(data);

}

//pega a requisição do body
exports.post = async(req, res, next) => {

    try {
        await repository.create(req.body);
        res.status(201).send({message: "Criado com sucesso!"});
    } catch(erro){
        console.log(erro);
        res.status(400).send({message: "erro ao cadastrar produto"});
    }
    
}

exports.put = async(res, req, next) => {
    const id = req.params.id;
    const body = req.body;
    await repository.put(id, body);
    res.status(201).send({message: "Atualizado com sucesso!"});
}


exports.getById = async(req, res, next) => {
    const id = req.params.id;
    const data = await repository.getById(id);

    if(data == null)
        res.status(404).send();

    res.status(200).send(data);
}


exports.delete = async(res, req, next) => {
    const id = req.params.id;

    await repository.delete(id);
    res.status(200).send({"message" : "Removido com sucesso"})
}