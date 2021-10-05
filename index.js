const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Me');
});

app.get('/projects', (req, res) => {
  res.send('Projects page');
});

app.get('/services', (req, res) => {
  res.send('Services page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Me');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});