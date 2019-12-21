const express = require('express');
const bodyParser = require( 'body-parser');
const { promisify } = require('util')
const authMiddleware = require('./auth')
const app = express();

app.set('port', process.env.PORT || 3500);

app.use(express.json());
app.use(authMiddleware)
//app.use(bodyParser.json());

app.use(require('./routes/main'));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
