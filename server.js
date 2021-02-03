const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cors = require('cors');

const dev = process.env.NODE_ENV === 'development';

const app = next({ dev });
const PORT = 3000;
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('*', (req, res) => {
    return handle(req, res);
  });

  server.use(function (err, req, res, next) {
    // Do logging and user-friendly error message display
    console.error(err.stack);
    console.error(err.message);
    res.status(500).send({
      status: 500,
      message: 'internal error in front server',
      type: 'internal',
    });
  });

  // 프론트 서버 가동
  server.listen(PORT, () => {
    console.log(`next+express front on : localhost:${PORT}`);
    return;
  });
});
