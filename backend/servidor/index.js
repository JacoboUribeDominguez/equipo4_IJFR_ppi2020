const express = require('express')
const app = express()
const mysql = require('./database')
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session');
app.use(cors());

app.set('port', 4000);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/sites', require('./routes/sitesRoutes'));

app.use('/users', require('./routes/usersRoutes'));

app.use('/reviews', require('./routes/reviewsRoutes'));

async function main(){
    await app.listen(app.get('port'));
    console.log(`server on port ${app.get('port')}`)
}

main();