const router = require('express').Router();
const { Posts } = require('../../models');

router.put('/:id', async(req,res) =>{
   console.log("we here boyzz")
   Posts.update(
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
      
 
   
})




module.exports = router;