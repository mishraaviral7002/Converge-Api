const express = require('express');
const router = express.Router();
const  {creationOfUser, getUser} = require("../controller/funct.js");







router.get('/', (req, res) => {
    res.send("Welcome");
});

router.post('/register', creationOfUser) ;

router.get('/login', getUser) ;



module.exports = router;