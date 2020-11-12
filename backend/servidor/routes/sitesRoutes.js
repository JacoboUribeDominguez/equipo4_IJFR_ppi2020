const { Router } = require('express');
const router = Router();
const connection = require('../database');

//requerir sitios
router.get('/listar', function(req, res){
    const sql = 'SELECT * FROM sitios'
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if (results.length > 0){
            res.json(results);
        } else {
            res.send('Not Found');
        }
    })
})

//requerir sitio
router.get('/encontrar/:id', function(req, res){
    const { id } = req.params;
    const sql = `SELECT * FROM sitios WHERE codigoSitio = ${id}`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
          res.json(result);
        } else {
          res.send('Not result');
        }
    });
})

//editar sitios
router.put('/editar/:id', function(req, res){
    const { id } = req.params;
    const { disponibilidadSitio } = req.body;
    const sql = `UPDATE sitios SET disponibilidadSitio='${disponibilidadSitio}' WHERE codigoSitio =${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Site updated!');
    });
});

module.exports = router;