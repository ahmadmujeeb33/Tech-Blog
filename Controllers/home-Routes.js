const router = require('express').Router();
const { Posts } = require('../models');

router.get('/', async(req,res) =>{
    res.render('HomePage',{loggedIn: req.session.loggedIn});
})

router.get('/login', async(req,res) =>{
    res.render('login');
})

router.get('/dashboard', async(req,res) =>{
    const PostsData = await Posts.findAll({
        // Add Book as a second model to JOIN with
        where:{
          user_id:req.session.user_id
        }
      });
    console.log(PostsData)
    res.render('dashboard', {PostsData});
    
})

router.get('/dashboard/new', async(req,res)=>{
    res.render('new');
})

router.get('/dashboard/edit/:id', async (req, res) => {
    try {
      const postData = await Posts.findByPk(req.params.id)
  
      res.render('editPost',{postData});
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;