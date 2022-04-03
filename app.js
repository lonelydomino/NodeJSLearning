const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/404')
// const expressHbs = require('express-handlebars')//Handlebars setup

const app = express();

// app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main'}))//Handlebars setup
// app.set('view engine', 'pug')//Pug setup
app.set('view engine', 'ejs')//set engine here
app.set('views', 'views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
