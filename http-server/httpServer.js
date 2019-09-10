
const http = require('http');

const httpServer =  {
  listen :  function(PortNumber){
    let app = http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Pesto Bootcamp!\n');
    });
    app.listen(PortNumber, '127.0.0.1');
  },
  close :  function(){
    app.close();
  }
}

export {
  httpServer,
};
