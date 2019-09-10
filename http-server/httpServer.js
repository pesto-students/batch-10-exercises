const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Pesto Bootcamp!\n");
});
const httpServer = {
  listen: (port, host = "127.0.0.1") => server.listen(port, host),
  close: () => server.close(),
};

export { httpServer };
