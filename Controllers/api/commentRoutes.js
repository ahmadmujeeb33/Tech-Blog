const router = require('express').Router();
const {Comments} = require('../../models');


router.post('/', async(req,res) =>{
    const postsData = await Comments.create({
        content:req.body.content,
        user_id: req.session.user_id,
        post_id:req.body.post_id
    });
    res.status(200).end();
})



module.exports = router;