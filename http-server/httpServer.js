
const http = require('http');


let app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Pesto Bootcamp!\n');
});


const httpServer =  {
  listen :  function(PortNumber){
    app.listen(PortNumber, '127.0.0.1');
  },
  close :  function(){
    app.close();
  }
}





app.listen(3000, '127.0.0.1');



export {
  httpServer,
};
