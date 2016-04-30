// Dependencies
var express = require('express');
var router = express.Router();
var personaModel = require(__dirname+'/../models/personasModel');
var config = require(__dirname+'/../../server/config');


router.get('/', function (req, res) {

    personaModel.find(function(err, persona) {
	    if(err) res.status(500).send(err.message);

	    console.log('GET /persona');
	        res.status(200).jsonp(persona);
    });

});

router.get('/:id', function (req, res) {
	
	personaModel.findById(req.params.id, function(err, persona) {
    	if(err) return res.status(500).send(err.message);

    	console.log('GET /persona/' + req.params.id);
        res.status(200).jsonp(persona);
    });

});

router.post('/', function (req, res) {

    var persona = new personaModel({
		nombre: req.body.nombre,
		sexo: req.body.sexo,
		pareja:req.body.pareja,
		email:req.body.email,
		clave:req.body.clave,
    });

    persona.save(function(err, persona) {
        if(err) return res.status(500).send( err.message);
	    console.log('POST /persona');
    	res.status(200).jsonp(persona);
    });

});

router.put('/:id', function (req, res) {
	
 	personaModel.findById(req.params.id, function(err, persona) {
		 
		persona.nombre	= req.body.nombre;
		persona.sexo	= req.body.sexo;
		persona.pareja	= req.body.pareja;
		persona.email	= req.body.email;
		persona.clave	= req.body.clave;

	    persona.save(function(err, persona) {
	        if(err) return res.status(500).send( err.message);
		    console.log('POST /persona');
	    	res.status(200).jsonp(persona);
	    });

    });
});


module.exports = router;