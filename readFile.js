const fs = require("fs");
const server = require("http").createServer();

server.on("request", async function (req, res) {
  const src = fs.createReadStream("./bigFile.txt");
  src.pipe(res);
});

server.listen("8000", function () {
  console.log("Server listening on port 8000");
});
