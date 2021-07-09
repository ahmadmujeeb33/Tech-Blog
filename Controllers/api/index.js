const router = require('express').Router();
const loginRoutes = require('./login-routes');
const postRoutes = require('./postRoutes');
const updateRoutes = require('./updateRoutes');


router.use('/users', loginRoutes);
router.use('/createPost', postRoutes);
router.use('/update', updateRoutes);


module.exports = router;
