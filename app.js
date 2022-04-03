const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
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

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: 'notfound' })
});

app.listen(3000);
