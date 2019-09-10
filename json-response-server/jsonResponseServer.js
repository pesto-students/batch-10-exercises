
const http = require('http');


let app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end({data :'Pesto Bootcamp!\n'});
});


const jsonResponseServer =  {
  listen :  function(PortNumber){
    app.listen(PortNumber, '127.0.0.1');
  },
  close :  function(){
    app.close();
  }
}


export {
  jsonResponseServer,
};

