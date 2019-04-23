const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

if (app.get('env') === 'development') {
  const logger = require('morgan');
  app.use(logger('dev'));
}
app.use(require('./controllers/burgers_controller'));

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server is online on http://localhost:${PORT}`);
});
