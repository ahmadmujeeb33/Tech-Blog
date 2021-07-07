const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  console.log(req.body)
try {
  const userData = await User.create(req.body);

  req.session.save(() => {
    req.session.loggedIn = true;

    res.status(200).json(userData);
 });
} catch (err) {
  res.status(400).json(err);
}
});


// Login
router.post('/login', async (req, res) => {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    const validPassword = await dbUserData.checkPassword(req.body.password);

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  
});

router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




module.exports = router;

