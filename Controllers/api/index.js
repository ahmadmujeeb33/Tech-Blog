const router = require('express').Router();
const loginRoutes = require('./login-routes');
const postRoutes = require('./postRoutes');
const updateRoutes = require('./updateRoutes');
const deleteRoutes = require('./deleteRoutes');


router.use('/users', loginRoutes);
router.use('/createPost', postRoutes);
router.use('/update', updateRoutes);
router.use('/deletePosts', deleteRoutes);


module.exports = router;
