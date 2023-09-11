import express from 'express';
import config from './config.js';

const app = express();
const { PORT, STATIC_DIR } = config;

app.use(express.static(STATIC_DIR));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}.`));
