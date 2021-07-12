const router = require('express').Router();
const { Posts } = require('../../models');

router.put('/:id', async(req,res) =>{
   await Posts.update(
        {
            title: req.body.title,
            content: req.body.content,

        },

        {
            // Gets the books based on the isbn given in the request parameters
            where: {
              id: req.params.id,
            },
        }
    
    );
      
    res.status(200).end();
   
})




module.exports = router;