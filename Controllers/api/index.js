const router = require('express').Router();
const loginRoutes = require('./login-routes');


router.use('/login-routes', loginRoutes);


module.exports = router;
