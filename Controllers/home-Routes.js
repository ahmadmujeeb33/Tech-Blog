const router = require('express').Router();

router.get('/', async(req,res) =>{
    res.render('HomePage');
})

router.get('/login', async(req,res) =>{
    res.render('log');
})






module.exports = router;