const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if(req.url === '/'){
    res.end('home page');
  }
  else if(req.url === '/about'){
    res.end('about page');
  }
  else if(req.url === '/contact'){
    res.end('contact page');
  }
  else{
    res.end(`
      <h1>Oops!!!</h1>
      <p>We cannot find the page you are looking for...</p>
      <a href="/">Back Home</a>
    `);
  }
});

server.listen(5000);