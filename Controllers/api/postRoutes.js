const router = require('express').Router();
const { Posts } = require('../../models');


router.post('/', async(req,res) =>{
    console.log("--------------------------------------");
    console.log(req.body);
    const postsData = await Posts.create({
        title:req.body.title,
        content:req.body.content,
        user_id: req.session.user_id
    });
})






module.exports = router;
