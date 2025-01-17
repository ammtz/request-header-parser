// index.js

// init project
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { join } from 'path';

const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Basic routing (http://expressjs.com/en/starter/basic-routing.html)
app.get('/', (req, res) => {
  res.sendFile(join(process.cwd(), 'views', 'index.html'));
});

// quick implementation...
app.get('/api/whoami', (req, res) => {
  res.json({
    // strips IPV6 format from ip address if existing...
    ipaddress: req.ip.includes('::ffff:') ? req.ip.split(':').pop() : req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// Listen for requests :)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
