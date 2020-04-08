import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// a function to just show hello plus a name
app.get('/api/HelloTS', (req, res) => {
  res.send(`Hello ${req.query.person}`);
});

app.listen(port, () => {
  console.log(`Serving static files from ${publicPath}`);
  console.log(`Example app listening on port ${port}!`);
});
