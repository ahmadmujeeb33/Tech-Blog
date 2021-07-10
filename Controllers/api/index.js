const router = require('express').Router();
const loginRoutes = require('./login-routes');
const postRoutes = require('./postRoutes');
const updateRoutes = require('./updateRoutes');
const deleteRoutes = require('./deleteRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/users', loginRoutes);
router.use('/createPost', postRoutes);
router.use('/update', updateRoutes);
router.use('/deletePosts', deleteRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
