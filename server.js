import fs from 'fs';
import https from 'https';
import express from 'express';
import config from './config.js';

const app = express();
const { PORT, STATIC_DIR, PASSPHRASE, CERT_PATH, KEY_PATH } = config;

app.use(express.static(STATIC_DIR));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

https
  .createServer(
    {
      cert: fs.readFileSync(CERT_PATH),
      key: fs.readFileSync(KEY_PATH),
      passphrase: PASSPHRASE,
    },
    app,
  )
  .listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
