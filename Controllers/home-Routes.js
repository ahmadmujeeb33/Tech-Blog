const router = require('express').Router();
const {User, Posts,Comments } = require('../models');

router.get('/', async(req,res) =>{

    const allData = await Posts.findAll({
        include: [
            {
              model: User,
              attributes: ['username'],
            },

            {
              model: Comments,
              attributes: ['content'],

            },
          ],
    
    });
    // const postData = allData.map(post => post.get({}))
    // console.log(postData)
    // console.log(allData);
    console.log("this one" +  req.session.loggedIn);

    res.render('HomePage',{ allData, loggedIn: req.session.loggedIn});
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
   
    res.render('dashboard', {PostsData,loggedIn: req.session.loggedIn});
    
})

router.get('/dashboard/new', async(req,res)=>{
    res.render('new', {loggedIn: req.session.loggedIn});
})

router.get('/dashboard/edit/:id', async (req, res) => {
    try {
      const postData = await Posts.findByPk(req.params.id)
  
      res.render('editPost',{postData, loggedIn: req.session.loggedIn});
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/BlogInfo/:id', async(req,res) =>{
  try {
    const PostsData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // const project = projectData.get({ plain: true });

    res.render('BlogInfo', { PostsData,loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

    



module.exports = router;