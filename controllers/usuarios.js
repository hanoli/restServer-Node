const {response} = require('express');

const usuariosGet = (req, res = response) => {
    //  res.send('Hello World')

    const {q,nombre ='No name', apiKey,page=1,limit} = req.query;

    res.json({
        msg:'Get API - Controlador',
        q,
        nombre,
        apiKey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre,edad} = req.body;

    res.json({
        msg:'Post API - Controlador',
        nombre,
        edad
    });
}
const usuariosPut = (req, res = response) => {
    
    const {id} = req.params;

    res.json({
        msg:'Put API - Controlador',
        id
    });
}
const usuariosPatch = (req, res = response) => {
    //  res.send('Hello World')
    res.json({
        msg:'Patch API - Controlador'
    });
}
const usuariosDelete = (req, res = response) => {
    //  res.send('Hello World')
    res.json({
        msg:'Delete API - Controlador'
    });
}

    module.exports = {
        usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete


    }