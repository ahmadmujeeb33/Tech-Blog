// Dependencies
const express = require('express');
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const routes = require('./Controllers');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 2080;

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(require(routes));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  


