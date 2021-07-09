// Dependencies
const express = require('express');
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const routes = require('./Controllers');
const sequelize = require('./Config/connection');
const session = require('express-session');

const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};






// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 2080;

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(routes);

// app.engine('handlebars', hbs.engine);
app.engine("handlebars",exphbs({
  runtimeOptions: {
  allowProtoPropertiesByDefault: true,
  allowProtoMethodsByDefault: true,
  },
})
);
app.set('view engine', 'handlebars');
// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  


