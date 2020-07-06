const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 3300;

const app = express();

dotenv.config();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log('Server works on port 3300'));