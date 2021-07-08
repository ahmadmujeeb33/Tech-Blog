const router = require('express').Router();

router.get('/', async(req,res) =>{
    res.render('HomePage',{loggedIn: req.session.loggedIn});
})

router.get('/login', async(req,res) =>{
    res.render('login');
})

router.get('/dashboard', async(req,res) =>{
    
    res.render('dashboard');
    
})

router.get('/dashboard/new', async(req,res)=>{
    res.render('new');
})





module.exports = router;