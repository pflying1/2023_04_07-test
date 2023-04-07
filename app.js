const http = require('http');
const url = require('url');
const fs = require('fs');
const date = require('date-and-time');

class Server {
  constructor(port) {
    this.port = port;
  }
  start() {
    http.createServer((req, res) => {
      const parseUrl = url.parse(req.url, true);
      const pathName = parseUrl.pathname;
      const Method = req.method;

      if (Method === 'GET' && pathName === '/') {
        this.handleGetRequest(req, res);
      }
      else if (Method === 'POST' && pathName === '/post') {
        this.handlePostRequest(req, res);
      }
    })
      .listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
      });
  }


  handleGetRequest(req, res) {
    let body = '';
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('500 ');
        res.end();
      } else {
        const now = new Date(body);
        date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let htm = `<!doctype html>
          <html>
          <head>
            <title>POST</title>
            <meta charset="utf-8">
          </head>
          <body>
          <form action="/post_test" method="post">
            ${date}
            </form>
          </body>
          </html>`
        ;
        res.end(htm);
      }
      res.end();
    });
  }

  handlePostRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      const now = new Date(body);
      date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
      res.writeHead(200, { 'Content-Type': 'text/html' });
      let htm = `<!doctype html>
        <html>
        <head>
          <title>POST</title>
          <meta charset="utf-8">
        </head>
        <body>
        <form action="/post_test" method="post">
          ${date}
          </form>
        </body>
        </html>`
      ;
      res.end(htm);
      });
  }
}
const server = new Server(3050);
server.start();




