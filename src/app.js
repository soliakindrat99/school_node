const express = require('express');
const body_parser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: "./config/.env" });
const port = process.env.PORT;
const index_router = require('./routes/index.js');
const lesson_router = require('./routes/lesson.js');
const auth_router = require('./routes/authorization.js');
const check_access_token = require('./middlewares/check_access_token.js');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(body_parser.json());

app.use('/', check_access_token, index_router);
app.use('/lesson', check_access_token, lesson_router);
app.use('/auth', auth_router);

console.log(port);

app.listen(port, () => console.log('Server has started to work!'));