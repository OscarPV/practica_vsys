const express = require('express');
const router = express.Router();

// Modelos
const Usuario = require('../models/Usuario');
const Conferencia = require('../models/Conferencia');

// @route GET api/busqueda
// @desc Busca contrataciones el la base aplicando los filtros proporcionados por el usuario.
// @acces Public
router.get('/busqueda', (req, res) => {
    const { usr, pro, est, pag } = req.query;
    const query = Conferencia.find();

    if (usr && usr.length) {
        query.where('usuario', new RegExp(usr, 'i'));
    }

    if (pro && pro.length) {
        query.where('producto', new RegExp(pro, 'i'));
    }

    if (est && est.length && parseInt(est) === 1) {
        query.where('status').equals(1);
    } else {
        query.where('status').equals(0);
    }

    query.select('usuario fecha_alta hora_alta folio_contratacion participantes producto');
    //query.populate({ path: 'datos_usuario', select: 'usuario nombre apellidos' });

    Conferencia.paginate(query, {
        populate: { 
            path: 'datos_usuario', 
            select: 'usuario nombre apellidos' 
        },
        page: pag || 1,
        limit: 5
    })
        .then(conferencias => res.json(conferencias));

    /*query.exec((err, conferencias) => {
        if (err) {
            res.status(404).json({success: false});
        }
        res.json(conferencias);
    });*/
});

module.exports = router;