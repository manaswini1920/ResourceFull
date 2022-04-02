const express = require('express');
const methodOverride = require('method-override');
const mainRoutes = require('./routes/mainRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use('/', mainRoutes);
app.use(express.static('assets'));

app.listen(3000);