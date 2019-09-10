const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ data: "Pesto Bootcamp!" }));
});
const jsonResponseServer = {
  listen: (port, host = "127.0.0.1") => server.listen(port, host),
  close: () => server.close()
};

export { jsonResponseServer };
