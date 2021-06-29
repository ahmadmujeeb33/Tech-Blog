const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) =>{
    try {
        const newProject = await User.create(req.body);
        res.status(200).json(newProject);
      } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;

