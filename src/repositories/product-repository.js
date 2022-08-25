//repository é a camada que interage com a base de dados
//conexão da aplicação com a base de dados
const mongoose = require('mongoose');
const Product = mongoose.model('Product'); //instanciando a model

//método para acessar a collection no MongoDB
exports.getProduct = async () => {
    const results = await Product.find({}, 'title price description _id active'); //colunas da base

    return results;
}

//mandar objetos para o mongo
//receber um objeto como parametro (data)
exports.create = async (data) => {
    console.log(data);
    let produto = Product(data);
    await produto.save();
}


//alterar o produto
exports.put = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            active: data.active            
        }
    });
}


//
exports.getById = async (id) => {
    const result = await Product.findById({_id : id}, "title price description _id active")
    return result;
}


//inativar o objeto da tabela
exports.delete = async (id) => {
    await Product.findByIdAndUpdate(id, {
        $set:{
            active: false
        }
    })
}