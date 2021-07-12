const router = require('express').Router();
const {Posts} = require('../../models');



router.delete('/:id', async (req, res) => {
    try {
      const postsData = await Posts.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).end();
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;