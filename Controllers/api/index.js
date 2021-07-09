const router = require('express').Router();
const loginRoutes = require('./login-routes');
const postRoutes = require('./postRoutes');


router.use('/users', loginRoutes);
router.use('/createPost', postRoutes);


module.exports = router;
