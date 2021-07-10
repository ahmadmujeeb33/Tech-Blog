const router = require('express').Router();
const {User, Posts } = require('../models');

router.get('/', async(req,res) =>{
    const PostsData = await Posts.findAll({
        include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
    
    });
    res.render('HomePage',{loggedIn: req.session.loggedIn, PostsData});
})

router.get('/login', async(req,res) =>{
    res.render('login');
})

router.get('/dashboard', async(req,res) =>{
    console.log("in this one");
    const PostsData = await Posts.findAll({
        // Add Book as a second model to JOIN with
        where:{
          user_id:req.session.user_id
        }
      });
   
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

router.get('/BlogInfo/:id', async(req,res) =>{
    try {
        const PostsData = await Posts.findByPk(req.params.id)
    
        res.render('BlogInfo',{PostsData});
      } catch (err) {
        res.status(500).json(err);
    }
    
})


module.exports = router;