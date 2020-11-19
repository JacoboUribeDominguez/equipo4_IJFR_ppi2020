const { Router } = require('express');
const router = Router();
const connection = require('../database');

router.get('/listar', (req, res) => {
    const sql = 'SELECT r.codigoReseña, u.usuario, r.descReseña, r.puntuacion FROM Reseñas r, Usuarios u WHERE r.codigoUsuario = u.codigoUsuario'
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if (results.length > 0){
            res.json(results);
        } else {
            res.send('Not Found');
        }
    })
})

router.post('/agregar', (req, res) => {
    const sql = 'INSERT INTO reseñas SET ?';
    const usuarioObj = {
        codigoReseña: req.body.codigoReseña,
        descReseña: req.body.descReseña,
        puntuacion: req.body.puntuacion,
        codigoUsuario: req.body.codigoUsuario,
        codigoSitio: req.body.codigoSitio
    };
    connection.query(sql, usuarioObj, error => {
        if (error) throw error; 
        res.send('Review created!');
    });
});

module.exports = router;