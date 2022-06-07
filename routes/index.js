var express = require('express');
var router = express.Router();
const { register, login} = require('../controller/indexcontroller')
const { authentify } = require ('../middleware/authentify')

/* GET home page. */
router.post('/', register);

router.post('/login', login);

router.get('/unrestricted', function(req, res){
    res.send(" This route is accessible to you ")
});

router.get('/restricted', authentify, function(req, res){
    res.send(" You are not allowed to access this route")
});

module.exports = router;
