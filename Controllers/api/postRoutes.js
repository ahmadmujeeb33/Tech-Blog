const router = require('express').Router();
const { Posts } = require('../../models');


router.post('/', async(req,res) =>{
    const postsData = await Posts.create({
        title:req.body.title,
        content:req.body.content,
        user_id: req.session.user_id
    });
    res.status(200).end();
})






module.exports = router;
