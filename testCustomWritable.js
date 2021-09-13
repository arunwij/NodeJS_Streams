const fs = require("fs");
const customWritableStream = require("./customWritableSteam");

// read big file and pipe to custom writable steam
const bigFileStream = fs.createReadStream("./bigFile.txt");
bigFileStream.pipe(customWritableStream);
