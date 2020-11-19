const { Router } = require('express');
const router = Router();
const connection = require('../database');


router.get('/listar', function(req, res){
    const sql = "SELECT * FROM usuarios"
    connection.query(sql, (error, result) =>{
        if (error) throw error;
        if(result.length > 0){
            res.json(result)
        } else {
            res.json({Mensaje: 'Not result'})
        }
    })
})

router.get('/encontrar/:nombre', function(req, res){
    const { nombre } = req.params;
    const sql = `SELECT * FROM usuarios WHERE usuario = "${nombre}"`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
          res.json(result);
        } else {
          res.json({Mensaje:'Not result'});
        }
    });
});

router.post('/agregar', (req, res) => {
    const sql = 'INSERT INTO usuarios SET ?';
    const usuarioObj = {
        codigoUsuario: req.body.codigoUsuario,
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        administrador: 0
    };
    connection.query(sql, usuarioObj, error => {
        if (error) throw error;
        res.send('Usuario created!');
    });
});

module.exports = router;