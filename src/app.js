const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: "../.env" });
const port = process.env.PORT;

const app = express();



app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(port);
app.listen(port, () => console.log('Server works on port 3300'));