const router = require('express').Router();
const {Comments} = require('../../models');


router.post('/', async(req,res) =>{
    console.log(req.body);
    const postsData = await Comments.create({
        content:req.body.content,
        user_id: req.session.user_id,
        post_id:req.body.post_id
    });
})



module.exports = router;